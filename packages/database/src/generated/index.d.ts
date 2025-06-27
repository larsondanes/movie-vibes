/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Movie
 *
 */
export type Movie = $Result.DefaultSelection<Prisma.$MoviePayload>;
/**
 * Model MovieList
 *
 */
export type MovieList = $Result.DefaultSelection<Prisma.$MovieListPayload>;
/**
 * Model MovieListItem
 *
 */
export type MovieListItem =
  $Result.DefaultSelection<Prisma.$MovieListItemPayload>;
/**
 * Model Review
 *
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>;
/**
 * Model Follow
 *
 */
export type Follow = $Result.DefaultSelection<Prisma.$FollowPayload>;
/**
 * Model Like
 *
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>;
/**
 * Model Activity
 *
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const MovieListType: {
    WATCHED: 'WATCHED';
    WATCHLIST: 'WATCHLIST';
    CUSTOM: 'CUSTOM';
  };

  export type MovieListType =
    (typeof MovieListType)[keyof typeof MovieListType];

  export const PrivacyLevel: {
    PUBLIC: 'PUBLIC';
    FRIENDS: 'FRIENDS';
    PRIVATE: 'PRIVATE';
  };

  export type PrivacyLevel = (typeof PrivacyLevel)[keyof typeof PrivacyLevel];

  export const ActivityType: {
    MOVIE_ADDED: 'MOVIE_ADDED';
    REVIEW_CREATED: 'REVIEW_CREATED';
    LIST_CREATED: 'LIST_CREATED';
    USER_FOLLOWED: 'USER_FOLLOWED';
  };

  export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType];
}

export type MovieListType = $Enums.MovieListType;

export const MovieListType: typeof $Enums.MovieListType;

export type PrivacyLevel = $Enums.PrivacyLevel;

export const PrivacyLevel: typeof $Enums.PrivacyLevel;

export type ActivityType = $Enums.ActivityType;

export const ActivityType: typeof $Enums.ActivityType;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent
    ) => void
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Movies
   * const movies = await prisma.movie.findMany()
   * ```
   */
  get movie(): Prisma.MovieDelegate<ExtArgs>;

  /**
   * `prisma.movieList`: Exposes CRUD operations for the **MovieList** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more MovieLists
   * const movieLists = await prisma.movieList.findMany()
   * ```
   */
  get movieList(): Prisma.MovieListDelegate<ExtArgs>;

  /**
   * `prisma.movieListItem`: Exposes CRUD operations for the **MovieListItem** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more MovieListItems
   * const movieListItems = await prisma.movieListItem.findMany()
   * ```
   */
  get movieListItem(): Prisma.MovieListItemDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Reviews
   * const reviews = await prisma.review.findMany()
   * ```
   */
  get review(): Prisma.ReviewDelegate<ExtArgs>;

  /**
   * `prisma.follow`: Exposes CRUD operations for the **Follow** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Follows
   * const follows = await prisma.follow.findMany()
   * ```
   */
  get follow(): Prisma.FollowDelegate<ExtArgs>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Likes
   * const likes = await prisma.like.findMany()
   * ```
   */
  get like(): Prisma.LikeDelegate<ExtArgs>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Activities
   * const activities = await prisma.activity.findMany()
   * ```
   */
  get activity(): Prisma.ActivityDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    Movie: 'Movie';
    MovieList: 'MovieList';
    MovieListItem: 'MovieListItem';
    Review: 'Review';
    Follow: 'Follow';
    Like: 'Like';
    Activity: 'Activity';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs; clientOptions: PrismaClientOptions },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      this['params']['clientOptions']
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > = {
    meta: {
      modelProps:
        | 'user'
        | 'movie'
        | 'movieList'
        | 'movieListItem'
        | 'review'
        | 'follow'
        | 'like'
        | 'activity';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Movie: {
        payload: Prisma.$MoviePayload<ExtArgs>;
        fields: Prisma.MovieFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MovieFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>;
          };
          findFirst: {
            args: Prisma.MovieFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>;
          };
          findMany: {
            args: Prisma.MovieFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[];
          };
          create: {
            args: Prisma.MovieCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>;
          };
          createMany: {
            args: Prisma.MovieCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MovieCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[];
          };
          delete: {
            args: Prisma.MovieDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>;
          };
          update: {
            args: Prisma.MovieUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>;
          };
          deleteMany: {
            args: Prisma.MovieDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MovieUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.MovieUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>;
          };
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMovie>;
          };
          groupBy: {
            args: Prisma.MovieGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MovieGroupByOutputType>[];
          };
          count: {
            args: Prisma.MovieCountArgs<ExtArgs>;
            result: $Utils.Optional<MovieCountAggregateOutputType> | number;
          };
        };
      };
      MovieList: {
        payload: Prisma.$MovieListPayload<ExtArgs>;
        fields: Prisma.MovieListFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MovieListFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovieListPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MovieListFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovieListPayload>;
          };
          findFirst: {
            args: Prisma.MovieListFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovieListPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MovieListFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovieListPayload>;
          };
          findMany: {
            args: Prisma.MovieListFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovieListPayload>[];
          };
          create: {
            args: Prisma.MovieListCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovieListPayload>;
          };
          createMany: {
            args: Prisma.MovieListCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MovieListCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovieListPayload>[];
          };
          delete: {
            args: Prisma.MovieListDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovieListPayload>;
          };
          update: {
            args: Prisma.MovieListUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovieListPayload>;
          };
          deleteMany: {
            args: Prisma.MovieListDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MovieListUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.MovieListUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovieListPayload>;
          };
          aggregate: {
            args: Prisma.MovieListAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMovieList>;
          };
          groupBy: {
            args: Prisma.MovieListGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MovieListGroupByOutputType>[];
          };
          count: {
            args: Prisma.MovieListCountArgs<ExtArgs>;
            result: $Utils.Optional<MovieListCountAggregateOutputType> | number;
          };
        };
      };
      MovieListItem: {
        payload: Prisma.$MovieListItemPayload<ExtArgs>;
        fields: Prisma.MovieListItemFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MovieListItemFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovieListItemPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MovieListItemFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovieListItemPayload>;
          };
          findFirst: {
            args: Prisma.MovieListItemFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovieListItemPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MovieListItemFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovieListItemPayload>;
          };
          findMany: {
            args: Prisma.MovieListItemFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovieListItemPayload>[];
          };
          create: {
            args: Prisma.MovieListItemCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovieListItemPayload>;
          };
          createMany: {
            args: Prisma.MovieListItemCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MovieListItemCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovieListItemPayload>[];
          };
          delete: {
            args: Prisma.MovieListItemDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovieListItemPayload>;
          };
          update: {
            args: Prisma.MovieListItemUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovieListItemPayload>;
          };
          deleteMany: {
            args: Prisma.MovieListItemDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MovieListItemUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.MovieListItemUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovieListItemPayload>;
          };
          aggregate: {
            args: Prisma.MovieListItemAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMovieListItem>;
          };
          groupBy: {
            args: Prisma.MovieListItemGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MovieListItemGroupByOutputType>[];
          };
          count: {
            args: Prisma.MovieListItemCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<MovieListItemCountAggregateOutputType>
              | number;
          };
        };
      };
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>;
        fields: Prisma.ReviewFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[];
          };
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[];
          };
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateReview>;
          };
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ReviewGroupByOutputType>[];
          };
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>;
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number;
          };
        };
      };
      Follow: {
        payload: Prisma.$FollowPayload<ExtArgs>;
        fields: Prisma.FollowFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.FollowFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.FollowFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>;
          };
          findFirst: {
            args: Prisma.FollowFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.FollowFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>;
          };
          findMany: {
            args: Prisma.FollowFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[];
          };
          create: {
            args: Prisma.FollowCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>;
          };
          createMany: {
            args: Prisma.FollowCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.FollowCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[];
          };
          delete: {
            args: Prisma.FollowDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>;
          };
          update: {
            args: Prisma.FollowUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>;
          };
          deleteMany: {
            args: Prisma.FollowDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.FollowUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.FollowUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>;
          };
          aggregate: {
            args: Prisma.FollowAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFollow>;
          };
          groupBy: {
            args: Prisma.FollowGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FollowGroupByOutputType>[];
          };
          count: {
            args: Prisma.FollowCountArgs<ExtArgs>;
            result: $Utils.Optional<FollowCountAggregateOutputType> | number;
          };
        };
      };
      Like: {
        payload: Prisma.$LikePayload<ExtArgs>;
        fields: Prisma.LikeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.LikeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LikePayload>;
          };
          findFirst: {
            args: Prisma.LikeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LikePayload>;
          };
          findMany: {
            args: Prisma.LikeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[];
          };
          create: {
            args: Prisma.LikeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LikePayload>;
          };
          createMany: {
            args: Prisma.LikeCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.LikeCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[];
          };
          delete: {
            args: Prisma.LikeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LikePayload>;
          };
          update: {
            args: Prisma.LikeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LikePayload>;
          };
          deleteMany: {
            args: Prisma.LikeDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.LikeUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.LikeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LikePayload>;
          };
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLike>;
          };
          groupBy: {
            args: Prisma.LikeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LikeGroupByOutputType>[];
          };
          count: {
            args: Prisma.LikeCountArgs<ExtArgs>;
            result: $Utils.Optional<LikeCountAggregateOutputType> | number;
          };
        };
      };
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>;
        fields: Prisma.ActivityFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>;
          };
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>;
          };
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[];
          };
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>;
          };
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[];
          };
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>;
          };
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>;
          };
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>;
          };
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateActivity>;
          };
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ActivityGroupByOutputType>[];
          };
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>;
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    movieLists: number;
    reviews: number;
    followers: number;
    following: number;
    likes: number;
    activities: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    movieLists?: boolean | UserCountOutputTypeCountMovieListsArgs;
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs;
    followers?: boolean | UserCountOutputTypeCountFollowersArgs;
    following?: boolean | UserCountOutputTypeCountFollowingArgs;
    likes?: boolean | UserCountOutputTypeCountLikesArgs;
    activities?: boolean | UserCountOutputTypeCountActivitiesArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMovieListsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MovieListWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReviewWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FollowWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FollowWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LikeWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivitiesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ActivityWhereInput;
  };

  /**
   * Count Type MovieCountOutputType
   */

  export type MovieCountOutputType = {
    movieListItems: number;
    reviews: number;
    likes: number;
  };

  export type MovieCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    movieListItems?: boolean | MovieCountOutputTypeCountMovieListItemsArgs;
    reviews?: boolean | MovieCountOutputTypeCountReviewsArgs;
    likes?: boolean | MovieCountOutputTypeCountLikesArgs;
  };

  // Custom InputTypes
  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     */
    select?: MovieCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountMovieListItemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MovieListItemWhereInput;
  };

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountReviewsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReviewWhereInput;
  };

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountLikesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LikeWhereInput;
  };

  /**
   * Count Type MovieListCountOutputType
   */

  export type MovieListCountOutputType = {
    items: number;
  };

  export type MovieListCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    items?: boolean | MovieListCountOutputTypeCountItemsArgs;
  };

  // Custom InputTypes
  /**
   * MovieListCountOutputType without action
   */
  export type MovieListCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieListCountOutputType
     */
    select?: MovieListCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * MovieListCountOutputType without action
   */
  export type MovieListCountOutputTypeCountItemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MovieListItemWhereInput;
  };

  /**
   * Count Type ReviewCountOutputType
   */

  export type ReviewCountOutputType = {
    likes: number;
  };

  export type ReviewCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    likes?: boolean | ReviewCountOutputTypeCountLikesArgs;
  };

  // Custom InputTypes
  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReviewCountOutputType
     */
    select?: ReviewCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountLikesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LikeWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    username: string | null;
    displayName: string | null;
    avatar: string | null;
    bio: string | null;
    password: string | null;
    verified: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    username: string | null;
    displayName: string | null;
    avatar: string | null;
    bio: string | null;
    password: string | null;
    verified: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    username: number;
    displayName: number;
    avatar: number;
    bio: number;
    password: number;
    verified: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    username?: true;
    displayName?: true;
    avatar?: true;
    bio?: true;
    password?: true;
    verified?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    username?: true;
    displayName?: true;
    avatar?: true;
    bio?: true;
    password?: true;
    verified?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    username?: true;
    displayName?: true;
    avatar?: true;
    bio?: true;
    password?: true;
    verified?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    username: string;
    displayName: string | null;
    avatar: string | null;
    bio: string | null;
    password: string;
    verified: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      username?: boolean;
      displayName?: boolean;
      avatar?: boolean;
      bio?: boolean;
      password?: boolean;
      verified?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      movieLists?: boolean | User$movieListsArgs<ExtArgs>;
      reviews?: boolean | User$reviewsArgs<ExtArgs>;
      followers?: boolean | User$followersArgs<ExtArgs>;
      following?: boolean | User$followingArgs<ExtArgs>;
      likes?: boolean | User$likesArgs<ExtArgs>;
      activities?: boolean | User$activitiesArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      username?: boolean;
      displayName?: boolean;
      avatar?: boolean;
      bio?: boolean;
      password?: boolean;
      verified?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    username?: boolean;
    displayName?: boolean;
    avatar?: boolean;
    bio?: boolean;
    password?: boolean;
    verified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    movieLists?: boolean | User$movieListsArgs<ExtArgs>;
    reviews?: boolean | User$reviewsArgs<ExtArgs>;
    followers?: boolean | User$followersArgs<ExtArgs>;
    following?: boolean | User$followingArgs<ExtArgs>;
    likes?: boolean | User$likesArgs<ExtArgs>;
    activities?: boolean | User$activitiesArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      movieLists: Prisma.$MovieListPayload<ExtArgs>[];
      reviews: Prisma.$ReviewPayload<ExtArgs>[];
      followers: Prisma.$FollowPayload<ExtArgs>[];
      following: Prisma.$FollowPayload<ExtArgs>[];
      likes: Prisma.$LikePayload<ExtArgs>[];
      activities: Prisma.$ActivityPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        username: string;
        displayName: string | null;
        avatar: string | null;
        bio: string | null;
        password: string;
        verified: boolean;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn'>
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    movieLists<T extends User$movieListsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$movieListsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MovieListPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$reviewsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    followers<T extends User$followersArgs<ExtArgs> = {}>(
      args?: Subset<T, User$followersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    following<T extends User$followingArgs<ExtArgs> = {}>(
      args?: Subset<T, User$followingArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    likes<T extends User$likesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$likesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'findMany'> | Null
    >;
    activities<T extends User$activitiesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$activitiesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly username: FieldRef<'User', 'String'>;
    readonly displayName: FieldRef<'User', 'String'>;
    readonly avatar: FieldRef<'User', 'String'>;
    readonly bio: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly verified: FieldRef<'User', 'Boolean'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
  };

  /**
   * User.movieLists
   */
  export type User$movieListsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null;
    where?: MovieListWhereInput;
    orderBy?:
      | MovieListOrderByWithRelationInput
      | MovieListOrderByWithRelationInput[];
    cursor?: MovieListWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MovieListScalarFieldEnum | MovieListScalarFieldEnum[];
  };

  /**
   * User.reviews
   */
  export type User$reviewsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    where?: ReviewWhereInput;
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    cursor?: ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * User.followers
   */
  export type User$followersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null;
    where?: FollowWhereInput;
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[];
    cursor?: FollowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[];
  };

  /**
   * User.following
   */
  export type User$followingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null;
    where?: FollowWhereInput;
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[];
    cursor?: FollowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[];
  };

  /**
   * User.likes
   */
  export type User$likesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    where?: LikeWhereInput;
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[];
    cursor?: LikeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[];
  };

  /**
   * User.activities
   */
  export type User$activitiesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null;
    where?: ActivityWhereInput;
    orderBy?:
      | ActivityOrderByWithRelationInput
      | ActivityOrderByWithRelationInput[];
    cursor?: ActivityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null;
    _avg: MovieAvgAggregateOutputType | null;
    _sum: MovieSumAggregateOutputType | null;
    _min: MovieMinAggregateOutputType | null;
    _max: MovieMaxAggregateOutputType | null;
  };

  export type MovieAvgAggregateOutputType = {
    tmdbId: number | null;
    runtime: number | null;
    voteAverage: number | null;
  };

  export type MovieSumAggregateOutputType = {
    tmdbId: number | null;
    runtime: number | null;
    voteAverage: number | null;
  };

  export type MovieMinAggregateOutputType = {
    id: string | null;
    tmdbId: number | null;
    title: string | null;
    overview: string | null;
    releaseDate: Date | null;
    runtime: number | null;
    posterPath: string | null;
    backdropPath: string | null;
    voteAverage: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type MovieMaxAggregateOutputType = {
    id: string | null;
    tmdbId: number | null;
    title: string | null;
    overview: string | null;
    releaseDate: Date | null;
    runtime: number | null;
    posterPath: string | null;
    backdropPath: string | null;
    voteAverage: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type MovieCountAggregateOutputType = {
    id: number;
    tmdbId: number;
    title: number;
    overview: number;
    releaseDate: number;
    runtime: number;
    posterPath: number;
    backdropPath: number;
    voteAverage: number;
    genres: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type MovieAvgAggregateInputType = {
    tmdbId?: true;
    runtime?: true;
    voteAverage?: true;
  };

  export type MovieSumAggregateInputType = {
    tmdbId?: true;
    runtime?: true;
    voteAverage?: true;
  };

  export type MovieMinAggregateInputType = {
    id?: true;
    tmdbId?: true;
    title?: true;
    overview?: true;
    releaseDate?: true;
    runtime?: true;
    posterPath?: true;
    backdropPath?: true;
    voteAverage?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type MovieMaxAggregateInputType = {
    id?: true;
    tmdbId?: true;
    title?: true;
    overview?: true;
    releaseDate?: true;
    runtime?: true;
    posterPath?: true;
    backdropPath?: true;
    voteAverage?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type MovieCountAggregateInputType = {
    id?: true;
    tmdbId?: true;
    title?: true;
    overview?: true;
    releaseDate?: true;
    runtime?: true;
    posterPath?: true;
    backdropPath?: true;
    voteAverage?: true;
    genres?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type MovieAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Movie to aggregate.
     */
    where?: MovieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MovieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Movies
     **/
    _count?: true | MovieCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MovieAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MovieSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MovieMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MovieMaxAggregateInputType;
  };

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
    [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>;
  };

  export type MovieGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MovieWhereInput;
    orderBy?:
      | MovieOrderByWithAggregationInput
      | MovieOrderByWithAggregationInput[];
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum;
    having?: MovieScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MovieCountAggregateInputType | true;
    _avg?: MovieAvgAggregateInputType;
    _sum?: MovieSumAggregateInputType;
    _min?: MovieMinAggregateInputType;
    _max?: MovieMaxAggregateInputType;
  };

  export type MovieGroupByOutputType = {
    id: string;
    tmdbId: number;
    title: string;
    overview: string | null;
    releaseDate: Date | null;
    runtime: number | null;
    posterPath: string | null;
    backdropPath: string | null;
    voteAverage: number | null;
    genres: string[];
    createdAt: Date;
    updatedAt: Date;
    _count: MovieCountAggregateOutputType | null;
    _avg: MovieAvgAggregateOutputType | null;
    _sum: MovieSumAggregateOutputType | null;
    _min: MovieMinAggregateOutputType | null;
    _max: MovieMaxAggregateOutputType | null;
  };

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<MovieGroupByOutputType, T['by']> & {
          [P in keyof T & keyof MovieGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>;
        }
      >
    >;

  export type MovieSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      tmdbId?: boolean;
      title?: boolean;
      overview?: boolean;
      releaseDate?: boolean;
      runtime?: boolean;
      posterPath?: boolean;
      backdropPath?: boolean;
      voteAverage?: boolean;
      genres?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      movieListItems?: boolean | Movie$movieListItemsArgs<ExtArgs>;
      reviews?: boolean | Movie$reviewsArgs<ExtArgs>;
      likes?: boolean | Movie$likesArgs<ExtArgs>;
      _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['movie']
  >;

  export type MovieSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      tmdbId?: boolean;
      title?: boolean;
      overview?: boolean;
      releaseDate?: boolean;
      runtime?: boolean;
      posterPath?: boolean;
      backdropPath?: boolean;
      voteAverage?: boolean;
      genres?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['movie']
  >;

  export type MovieSelectScalar = {
    id?: boolean;
    tmdbId?: boolean;
    title?: boolean;
    overview?: boolean;
    releaseDate?: boolean;
    runtime?: boolean;
    posterPath?: boolean;
    backdropPath?: boolean;
    voteAverage?: boolean;
    genres?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type MovieInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    movieListItems?: boolean | Movie$movieListItemsArgs<ExtArgs>;
    reviews?: boolean | Movie$reviewsArgs<ExtArgs>;
    likes?: boolean | Movie$likesArgs<ExtArgs>;
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type MovieIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $MoviePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Movie';
    objects: {
      movieListItems: Prisma.$MovieListItemPayload<ExtArgs>[];
      reviews: Prisma.$ReviewPayload<ExtArgs>[];
      likes: Prisma.$LikePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        tmdbId: number;
        title: string;
        overview: string | null;
        releaseDate: Date | null;
        runtime: number | null;
        posterPath: string | null;
        backdropPath: string | null;
        voteAverage: number | null;
        genres: string[];
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['movie']
    >;
    composites: {};
  };

  type MovieGetPayload<
    S extends boolean | null | undefined | MovieDefaultArgs,
  > = $Result.GetResult<Prisma.$MoviePayload, S>;

  type MovieCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<MovieFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: MovieCountAggregateInputType | true;
  };

  export interface MovieDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Movie'];
      meta: { name: 'Movie' };
    };
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieFindUniqueArgs>(
      args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>
    ): Prisma__MovieClient<
      $Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Movie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MovieFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MovieClient<
      $Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieFindFirstArgs>(
      args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>
    ): Prisma__MovieClient<
      $Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MovieFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MovieClient<
      $Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     *
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MovieFindManyArgs>(
      args?: SelectSubset<T, MovieFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     *
     */
    create<T extends MovieCreateArgs>(
      args: SelectSubset<T, MovieCreateArgs<ExtArgs>>
    ): Prisma__MovieClient<
      $Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Movies.
     * @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MovieCreateManyArgs>(
      args?: SelectSubset<T, MovieCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Movies and returns the data saved in the database.
     * @param {MovieCreateManyAndReturnArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Movies and only return the `id`
     * const movieWithIdOnly = await prisma.movie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MovieCreateManyAndReturnArgs>(
      args?: SelectSubset<T, MovieCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'createManyAndReturn'>
    >;

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     *
     */
    delete<T extends MovieDeleteArgs>(
      args: SelectSubset<T, MovieDeleteArgs<ExtArgs>>
    ): Prisma__MovieClient<
      $Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MovieUpdateArgs>(
      args: SelectSubset<T, MovieUpdateArgs<ExtArgs>>
    ): Prisma__MovieClient<
      $Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MovieDeleteManyArgs>(
      args?: SelectSubset<T, MovieDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MovieUpdateManyArgs>(
      args: SelectSubset<T, MovieUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     */
    upsert<T extends MovieUpsertArgs>(
      args: SelectSubset<T, MovieUpsertArgs<ExtArgs>>
    ): Prisma__MovieClient<
      $Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
     **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MovieAggregateArgs>(
      args: Subset<T, MovieAggregateArgs>
    ): Prisma.PrismaPromise<GetMovieAggregateType<T>>;

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetMovieGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Movie model
     */
    readonly fields: MovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    movieListItems<T extends Movie$movieListItemsArgs<ExtArgs> = {}>(
      args?: Subset<T, Movie$movieListItemsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$MovieListItemPayload<ExtArgs>, T, 'findMany'>
      | Null
    >;
    reviews<T extends Movie$reviewsArgs<ExtArgs> = {}>(
      args?: Subset<T, Movie$reviewsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    likes<T extends Movie$likesArgs<ExtArgs> = {}>(
      args?: Subset<T, Movie$likesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'findMany'> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Movie model
   */
  interface MovieFieldRefs {
    readonly id: FieldRef<'Movie', 'String'>;
    readonly tmdbId: FieldRef<'Movie', 'Int'>;
    readonly title: FieldRef<'Movie', 'String'>;
    readonly overview: FieldRef<'Movie', 'String'>;
    readonly releaseDate: FieldRef<'Movie', 'DateTime'>;
    readonly runtime: FieldRef<'Movie', 'Int'>;
    readonly posterPath: FieldRef<'Movie', 'String'>;
    readonly backdropPath: FieldRef<'Movie', 'String'>;
    readonly voteAverage: FieldRef<'Movie', 'Float'>;
    readonly genres: FieldRef<'Movie', 'String[]'>;
    readonly createdAt: FieldRef<'Movie', 'DateTime'>;
    readonly updatedAt: FieldRef<'Movie', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput;
  };

  /**
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput;
  };

  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
    /**
     * Filter, which Movies to fetch.
     */
    where?: MovieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Movies.
     */
    cursor?: MovieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Movies.
     */
    skip?: number;
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * Movie create
   */
  export type MovieCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
    /**
     * The data needed to create a Movie.
     */
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>;
  };

  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Movie createManyAndReturn
   */
  export type MovieCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Movie update
   */
  export type MovieUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
    /**
     * The data needed to update a Movie.
     */
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>;
    /**
     * Choose, which Movie to update.
     */
    where: MovieWhereUniqueInput;
  };

  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>;
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput;
  };

  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
    /**
     * The filter to search for the Movie to update in case it exists.
     */
    where: MovieWhereUniqueInput;
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     */
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>;
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>;
  };

  /**
   * Movie delete
   */
  export type MovieDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
    /**
     * Filter which Movie to delete.
     */
    where: MovieWhereUniqueInput;
  };

  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput;
  };

  /**
   * Movie.movieListItems
   */
  export type Movie$movieListItemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieListItem
     */
    select?: MovieListItemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListItemInclude<ExtArgs> | null;
    where?: MovieListItemWhereInput;
    orderBy?:
      | MovieListItemOrderByWithRelationInput
      | MovieListItemOrderByWithRelationInput[];
    cursor?: MovieListItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MovieListItemScalarFieldEnum | MovieListItemScalarFieldEnum[];
  };

  /**
   * Movie.reviews
   */
  export type Movie$reviewsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    where?: ReviewWhereInput;
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    cursor?: ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * Movie.likes
   */
  export type Movie$likesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    where?: LikeWhereInput;
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[];
    cursor?: LikeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[];
  };

  /**
   * Movie without action
   */
  export type MovieDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
  };

  /**
   * Model MovieList
   */

  export type AggregateMovieList = {
    _count: MovieListCountAggregateOutputType | null;
    _min: MovieListMinAggregateOutputType | null;
    _max: MovieListMaxAggregateOutputType | null;
  };

  export type MovieListMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    type: $Enums.MovieListType | null;
    privacy: $Enums.PrivacyLevel | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type MovieListMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    type: $Enums.MovieListType | null;
    privacy: $Enums.PrivacyLevel | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type MovieListCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    type: number;
    privacy: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type MovieListMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    type?: true;
    privacy?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type MovieListMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    type?: true;
    privacy?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type MovieListCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    type?: true;
    privacy?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type MovieListAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MovieList to aggregate.
     */
    where?: MovieListWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MovieLists to fetch.
     */
    orderBy?:
      | MovieListOrderByWithRelationInput
      | MovieListOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MovieListWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MovieLists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MovieLists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MovieLists
     **/
    _count?: true | MovieListCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MovieListMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MovieListMaxAggregateInputType;
  };

  export type GetMovieListAggregateType<T extends MovieListAggregateArgs> = {
    [P in keyof T & keyof AggregateMovieList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieList[P]>
      : GetScalarType<T[P], AggregateMovieList[P]>;
  };

  export type MovieListGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MovieListWhereInput;
    orderBy?:
      | MovieListOrderByWithAggregationInput
      | MovieListOrderByWithAggregationInput[];
    by: MovieListScalarFieldEnum[] | MovieListScalarFieldEnum;
    having?: MovieListScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MovieListCountAggregateInputType | true;
    _min?: MovieListMinAggregateInputType;
    _max?: MovieListMaxAggregateInputType;
  };

  export type MovieListGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    type: $Enums.MovieListType;
    privacy: $Enums.PrivacyLevel;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MovieListCountAggregateOutputType | null;
    _min: MovieListMinAggregateOutputType | null;
    _max: MovieListMaxAggregateOutputType | null;
  };

  type GetMovieListGroupByPayload<T extends MovieListGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<MovieListGroupByOutputType, T['by']> & {
          [P in keyof T & keyof MovieListGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieListGroupByOutputType[P]>
            : GetScalarType<T[P], MovieListGroupByOutputType[P]>;
        }
      >
    >;

  export type MovieListSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      type?: boolean;
      privacy?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      items?: boolean | MovieList$itemsArgs<ExtArgs>;
      _count?: boolean | MovieListCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['movieList']
  >;

  export type MovieListSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      type?: boolean;
      privacy?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['movieList']
  >;

  export type MovieListSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    type?: boolean;
    privacy?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type MovieListInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    items?: boolean | MovieList$itemsArgs<ExtArgs>;
    _count?: boolean | MovieListCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type MovieListIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $MovieListPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'MovieList';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      items: Prisma.$MovieListItemPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        type: $Enums.MovieListType;
        privacy: $Enums.PrivacyLevel;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['movieList']
    >;
    composites: {};
  };

  type MovieListGetPayload<
    S extends boolean | null | undefined | MovieListDefaultArgs,
  > = $Result.GetResult<Prisma.$MovieListPayload, S>;

  type MovieListCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<MovieListFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: MovieListCountAggregateInputType | true;
  };

  export interface MovieListDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['MovieList'];
      meta: { name: 'MovieList' };
    };
    /**
     * Find zero or one MovieList that matches the filter.
     * @param {MovieListFindUniqueArgs} args - Arguments to find a MovieList
     * @example
     * // Get one MovieList
     * const movieList = await prisma.movieList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieListFindUniqueArgs>(
      args: SelectSubset<T, MovieListFindUniqueArgs<ExtArgs>>
    ): Prisma__MovieListClient<
      $Result.GetResult<
        Prisma.$MovieListPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one MovieList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieListFindUniqueOrThrowArgs} args - Arguments to find a MovieList
     * @example
     * // Get one MovieList
     * const movieList = await prisma.movieList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieListFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MovieListFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MovieListClient<
      $Result.GetResult<
        Prisma.$MovieListPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first MovieList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieListFindFirstArgs} args - Arguments to find a MovieList
     * @example
     * // Get one MovieList
     * const movieList = await prisma.movieList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieListFindFirstArgs>(
      args?: SelectSubset<T, MovieListFindFirstArgs<ExtArgs>>
    ): Prisma__MovieListClient<
      $Result.GetResult<
        Prisma.$MovieListPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first MovieList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieListFindFirstOrThrowArgs} args - Arguments to find a MovieList
     * @example
     * // Get one MovieList
     * const movieList = await prisma.movieList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieListFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MovieListFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MovieListClient<
      $Result.GetResult<
        Prisma.$MovieListPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more MovieLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieLists
     * const movieLists = await prisma.movieList.findMany()
     *
     * // Get first 10 MovieLists
     * const movieLists = await prisma.movieList.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const movieListWithIdOnly = await prisma.movieList.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MovieListFindManyArgs>(
      args?: SelectSubset<T, MovieListFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MovieListPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a MovieList.
     * @param {MovieListCreateArgs} args - Arguments to create a MovieList.
     * @example
     * // Create one MovieList
     * const MovieList = await prisma.movieList.create({
     *   data: {
     *     // ... data to create a MovieList
     *   }
     * })
     *
     */
    create<T extends MovieListCreateArgs>(
      args: SelectSubset<T, MovieListCreateArgs<ExtArgs>>
    ): Prisma__MovieListClient<
      $Result.GetResult<Prisma.$MovieListPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many MovieLists.
     * @param {MovieListCreateManyArgs} args - Arguments to create many MovieLists.
     * @example
     * // Create many MovieLists
     * const movieList = await prisma.movieList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MovieListCreateManyArgs>(
      args?: SelectSubset<T, MovieListCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many MovieLists and returns the data saved in the database.
     * @param {MovieListCreateManyAndReturnArgs} args - Arguments to create many MovieLists.
     * @example
     * // Create many MovieLists
     * const movieList = await prisma.movieList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MovieLists and only return the `id`
     * const movieListWithIdOnly = await prisma.movieList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MovieListCreateManyAndReturnArgs>(
      args?: SelectSubset<T, MovieListCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MovieListPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a MovieList.
     * @param {MovieListDeleteArgs} args - Arguments to delete one MovieList.
     * @example
     * // Delete one MovieList
     * const MovieList = await prisma.movieList.delete({
     *   where: {
     *     // ... filter to delete one MovieList
     *   }
     * })
     *
     */
    delete<T extends MovieListDeleteArgs>(
      args: SelectSubset<T, MovieListDeleteArgs<ExtArgs>>
    ): Prisma__MovieListClient<
      $Result.GetResult<Prisma.$MovieListPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one MovieList.
     * @param {MovieListUpdateArgs} args - Arguments to update one MovieList.
     * @example
     * // Update one MovieList
     * const movieList = await prisma.movieList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MovieListUpdateArgs>(
      args: SelectSubset<T, MovieListUpdateArgs<ExtArgs>>
    ): Prisma__MovieListClient<
      $Result.GetResult<Prisma.$MovieListPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more MovieLists.
     * @param {MovieListDeleteManyArgs} args - Arguments to filter MovieLists to delete.
     * @example
     * // Delete a few MovieLists
     * const { count } = await prisma.movieList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MovieListDeleteManyArgs>(
      args?: SelectSubset<T, MovieListDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more MovieLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieLists
     * const movieList = await prisma.movieList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MovieListUpdateManyArgs>(
      args: SelectSubset<T, MovieListUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one MovieList.
     * @param {MovieListUpsertArgs} args - Arguments to update or create a MovieList.
     * @example
     * // Update or create a MovieList
     * const movieList = await prisma.movieList.upsert({
     *   create: {
     *     // ... data to create a MovieList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieList we want to update
     *   }
     * })
     */
    upsert<T extends MovieListUpsertArgs>(
      args: SelectSubset<T, MovieListUpsertArgs<ExtArgs>>
    ): Prisma__MovieListClient<
      $Result.GetResult<Prisma.$MovieListPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of MovieLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieListCountArgs} args - Arguments to filter MovieLists to count.
     * @example
     * // Count the number of MovieLists
     * const count = await prisma.movieList.count({
     *   where: {
     *     // ... the filter for the MovieLists we want to count
     *   }
     * })
     **/
    count<T extends MovieListCountArgs>(
      args?: Subset<T, MovieListCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieListCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a MovieList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MovieListAggregateArgs>(
      args: Subset<T, MovieListAggregateArgs>
    ): Prisma.PrismaPromise<GetMovieListAggregateType<T>>;

    /**
     * Group by MovieList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends MovieListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieListGroupByArgs['orderBy'] }
        : { orderBy?: MovieListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MovieListGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetMovieListGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MovieList model
     */
    readonly fields: MovieListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieListClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;
    items<T extends MovieList$itemsArgs<ExtArgs> = {}>(
      args?: Subset<T, MovieList$itemsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$MovieListItemPayload<ExtArgs>, T, 'findMany'>
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the MovieList model
   */
  interface MovieListFieldRefs {
    readonly id: FieldRef<'MovieList', 'String'>;
    readonly name: FieldRef<'MovieList', 'String'>;
    readonly description: FieldRef<'MovieList', 'String'>;
    readonly type: FieldRef<'MovieList', 'MovieListType'>;
    readonly privacy: FieldRef<'MovieList', 'PrivacyLevel'>;
    readonly userId: FieldRef<'MovieList', 'String'>;
    readonly createdAt: FieldRef<'MovieList', 'DateTime'>;
    readonly updatedAt: FieldRef<'MovieList', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * MovieList findUnique
   */
  export type MovieListFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null;
    /**
     * Filter, which MovieList to fetch.
     */
    where: MovieListWhereUniqueInput;
  };

  /**
   * MovieList findUniqueOrThrow
   */
  export type MovieListFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null;
    /**
     * Filter, which MovieList to fetch.
     */
    where: MovieListWhereUniqueInput;
  };

  /**
   * MovieList findFirst
   */
  export type MovieListFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null;
    /**
     * Filter, which MovieList to fetch.
     */
    where?: MovieListWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MovieLists to fetch.
     */
    orderBy?:
      | MovieListOrderByWithRelationInput
      | MovieListOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MovieLists.
     */
    cursor?: MovieListWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MovieLists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MovieLists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MovieLists.
     */
    distinct?: MovieListScalarFieldEnum | MovieListScalarFieldEnum[];
  };

  /**
   * MovieList findFirstOrThrow
   */
  export type MovieListFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null;
    /**
     * Filter, which MovieList to fetch.
     */
    where?: MovieListWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MovieLists to fetch.
     */
    orderBy?:
      | MovieListOrderByWithRelationInput
      | MovieListOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MovieLists.
     */
    cursor?: MovieListWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MovieLists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MovieLists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MovieLists.
     */
    distinct?: MovieListScalarFieldEnum | MovieListScalarFieldEnum[];
  };

  /**
   * MovieList findMany
   */
  export type MovieListFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null;
    /**
     * Filter, which MovieLists to fetch.
     */
    where?: MovieListWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MovieLists to fetch.
     */
    orderBy?:
      | MovieListOrderByWithRelationInput
      | MovieListOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MovieLists.
     */
    cursor?: MovieListWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MovieLists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MovieLists.
     */
    skip?: number;
    distinct?: MovieListScalarFieldEnum | MovieListScalarFieldEnum[];
  };

  /**
   * MovieList create
   */
  export type MovieListCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null;
    /**
     * The data needed to create a MovieList.
     */
    data: XOR<MovieListCreateInput, MovieListUncheckedCreateInput>;
  };

  /**
   * MovieList createMany
   */
  export type MovieListCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many MovieLists.
     */
    data: MovieListCreateManyInput | MovieListCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * MovieList createManyAndReturn
   */
  export type MovieListCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many MovieLists.
     */
    data: MovieListCreateManyInput | MovieListCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * MovieList update
   */
  export type MovieListUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null;
    /**
     * The data needed to update a MovieList.
     */
    data: XOR<MovieListUpdateInput, MovieListUncheckedUpdateInput>;
    /**
     * Choose, which MovieList to update.
     */
    where: MovieListWhereUniqueInput;
  };

  /**
   * MovieList updateMany
   */
  export type MovieListUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update MovieLists.
     */
    data: XOR<
      MovieListUpdateManyMutationInput,
      MovieListUncheckedUpdateManyInput
    >;
    /**
     * Filter which MovieLists to update
     */
    where?: MovieListWhereInput;
  };

  /**
   * MovieList upsert
   */
  export type MovieListUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null;
    /**
     * The filter to search for the MovieList to update in case it exists.
     */
    where: MovieListWhereUniqueInput;
    /**
     * In case the MovieList found by the `where` argument doesn't exist, create a new MovieList with this data.
     */
    create: XOR<MovieListCreateInput, MovieListUncheckedCreateInput>;
    /**
     * In case the MovieList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieListUpdateInput, MovieListUncheckedUpdateInput>;
  };

  /**
   * MovieList delete
   */
  export type MovieListDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null;
    /**
     * Filter which MovieList to delete.
     */
    where: MovieListWhereUniqueInput;
  };

  /**
   * MovieList deleteMany
   */
  export type MovieListDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MovieLists to delete
     */
    where?: MovieListWhereInput;
  };

  /**
   * MovieList.items
   */
  export type MovieList$itemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieListItem
     */
    select?: MovieListItemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListItemInclude<ExtArgs> | null;
    where?: MovieListItemWhereInput;
    orderBy?:
      | MovieListItemOrderByWithRelationInput
      | MovieListItemOrderByWithRelationInput[];
    cursor?: MovieListItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MovieListItemScalarFieldEnum | MovieListItemScalarFieldEnum[];
  };

  /**
   * MovieList without action
   */
  export type MovieListDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null;
  };

  /**
   * Model MovieListItem
   */

  export type AggregateMovieListItem = {
    _count: MovieListItemCountAggregateOutputType | null;
    _avg: MovieListItemAvgAggregateOutputType | null;
    _sum: MovieListItemSumAggregateOutputType | null;
    _min: MovieListItemMinAggregateOutputType | null;
    _max: MovieListItemMaxAggregateOutputType | null;
  };

  export type MovieListItemAvgAggregateOutputType = {
    rating: number | null;
  };

  export type MovieListItemSumAggregateOutputType = {
    rating: number | null;
  };

  export type MovieListItemMinAggregateOutputType = {
    id: string | null;
    movieListId: string | null;
    movieId: string | null;
    notes: string | null;
    rating: number | null;
    watchedAt: Date | null;
    addedAt: Date | null;
  };

  export type MovieListItemMaxAggregateOutputType = {
    id: string | null;
    movieListId: string | null;
    movieId: string | null;
    notes: string | null;
    rating: number | null;
    watchedAt: Date | null;
    addedAt: Date | null;
  };

  export type MovieListItemCountAggregateOutputType = {
    id: number;
    movieListId: number;
    movieId: number;
    notes: number;
    rating: number;
    watchedAt: number;
    addedAt: number;
    _all: number;
  };

  export type MovieListItemAvgAggregateInputType = {
    rating?: true;
  };

  export type MovieListItemSumAggregateInputType = {
    rating?: true;
  };

  export type MovieListItemMinAggregateInputType = {
    id?: true;
    movieListId?: true;
    movieId?: true;
    notes?: true;
    rating?: true;
    watchedAt?: true;
    addedAt?: true;
  };

  export type MovieListItemMaxAggregateInputType = {
    id?: true;
    movieListId?: true;
    movieId?: true;
    notes?: true;
    rating?: true;
    watchedAt?: true;
    addedAt?: true;
  };

  export type MovieListItemCountAggregateInputType = {
    id?: true;
    movieListId?: true;
    movieId?: true;
    notes?: true;
    rating?: true;
    watchedAt?: true;
    addedAt?: true;
    _all?: true;
  };

  export type MovieListItemAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MovieListItem to aggregate.
     */
    where?: MovieListItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MovieListItems to fetch.
     */
    orderBy?:
      | MovieListItemOrderByWithRelationInput
      | MovieListItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MovieListItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MovieListItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MovieListItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MovieListItems
     **/
    _count?: true | MovieListItemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MovieListItemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MovieListItemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MovieListItemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MovieListItemMaxAggregateInputType;
  };

  export type GetMovieListItemAggregateType<
    T extends MovieListItemAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateMovieListItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieListItem[P]>
      : GetScalarType<T[P], AggregateMovieListItem[P]>;
  };

  export type MovieListItemGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MovieListItemWhereInput;
    orderBy?:
      | MovieListItemOrderByWithAggregationInput
      | MovieListItemOrderByWithAggregationInput[];
    by: MovieListItemScalarFieldEnum[] | MovieListItemScalarFieldEnum;
    having?: MovieListItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MovieListItemCountAggregateInputType | true;
    _avg?: MovieListItemAvgAggregateInputType;
    _sum?: MovieListItemSumAggregateInputType;
    _min?: MovieListItemMinAggregateInputType;
    _max?: MovieListItemMaxAggregateInputType;
  };

  export type MovieListItemGroupByOutputType = {
    id: string;
    movieListId: string;
    movieId: string;
    notes: string | null;
    rating: number | null;
    watchedAt: Date | null;
    addedAt: Date;
    _count: MovieListItemCountAggregateOutputType | null;
    _avg: MovieListItemAvgAggregateOutputType | null;
    _sum: MovieListItemSumAggregateOutputType | null;
    _min: MovieListItemMinAggregateOutputType | null;
    _max: MovieListItemMaxAggregateOutputType | null;
  };

  type GetMovieListItemGroupByPayload<T extends MovieListItemGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<MovieListItemGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof MovieListItemGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieListItemGroupByOutputType[P]>
            : GetScalarType<T[P], MovieListItemGroupByOutputType[P]>;
        }
      >
    >;

  export type MovieListItemSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      movieListId?: boolean;
      movieId?: boolean;
      notes?: boolean;
      rating?: boolean;
      watchedAt?: boolean;
      addedAt?: boolean;
      movieList?: boolean | MovieListDefaultArgs<ExtArgs>;
      movie?: boolean | MovieDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['movieListItem']
  >;

  export type MovieListItemSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      movieListId?: boolean;
      movieId?: boolean;
      notes?: boolean;
      rating?: boolean;
      watchedAt?: boolean;
      addedAt?: boolean;
      movieList?: boolean | MovieListDefaultArgs<ExtArgs>;
      movie?: boolean | MovieDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['movieListItem']
  >;

  export type MovieListItemSelectScalar = {
    id?: boolean;
    movieListId?: boolean;
    movieId?: boolean;
    notes?: boolean;
    rating?: boolean;
    watchedAt?: boolean;
    addedAt?: boolean;
  };

  export type MovieListItemInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    movieList?: boolean | MovieListDefaultArgs<ExtArgs>;
    movie?: boolean | MovieDefaultArgs<ExtArgs>;
  };
  export type MovieListItemIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    movieList?: boolean | MovieListDefaultArgs<ExtArgs>;
    movie?: boolean | MovieDefaultArgs<ExtArgs>;
  };

  export type $MovieListItemPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'MovieListItem';
    objects: {
      movieList: Prisma.$MovieListPayload<ExtArgs>;
      movie: Prisma.$MoviePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        movieListId: string;
        movieId: string;
        notes: string | null;
        rating: number | null;
        watchedAt: Date | null;
        addedAt: Date;
      },
      ExtArgs['result']['movieListItem']
    >;
    composites: {};
  };

  type MovieListItemGetPayload<
    S extends boolean | null | undefined | MovieListItemDefaultArgs,
  > = $Result.GetResult<Prisma.$MovieListItemPayload, S>;

  type MovieListItemCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<MovieListItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: MovieListItemCountAggregateInputType | true;
  };

  export interface MovieListItemDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['MovieListItem'];
      meta: { name: 'MovieListItem' };
    };
    /**
     * Find zero or one MovieListItem that matches the filter.
     * @param {MovieListItemFindUniqueArgs} args - Arguments to find a MovieListItem
     * @example
     * // Get one MovieListItem
     * const movieListItem = await prisma.movieListItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieListItemFindUniqueArgs>(
      args: SelectSubset<T, MovieListItemFindUniqueArgs<ExtArgs>>
    ): Prisma__MovieListItemClient<
      $Result.GetResult<
        Prisma.$MovieListItemPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one MovieListItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieListItemFindUniqueOrThrowArgs} args - Arguments to find a MovieListItem
     * @example
     * // Get one MovieListItem
     * const movieListItem = await prisma.movieListItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieListItemFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MovieListItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MovieListItemClient<
      $Result.GetResult<
        Prisma.$MovieListItemPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first MovieListItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieListItemFindFirstArgs} args - Arguments to find a MovieListItem
     * @example
     * // Get one MovieListItem
     * const movieListItem = await prisma.movieListItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieListItemFindFirstArgs>(
      args?: SelectSubset<T, MovieListItemFindFirstArgs<ExtArgs>>
    ): Prisma__MovieListItemClient<
      $Result.GetResult<
        Prisma.$MovieListItemPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first MovieListItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieListItemFindFirstOrThrowArgs} args - Arguments to find a MovieListItem
     * @example
     * // Get one MovieListItem
     * const movieListItem = await prisma.movieListItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieListItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MovieListItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MovieListItemClient<
      $Result.GetResult<
        Prisma.$MovieListItemPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more MovieListItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieListItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieListItems
     * const movieListItems = await prisma.movieListItem.findMany()
     *
     * // Get first 10 MovieListItems
     * const movieListItems = await prisma.movieListItem.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const movieListItemWithIdOnly = await prisma.movieListItem.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MovieListItemFindManyArgs>(
      args?: SelectSubset<T, MovieListItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MovieListItemPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a MovieListItem.
     * @param {MovieListItemCreateArgs} args - Arguments to create a MovieListItem.
     * @example
     * // Create one MovieListItem
     * const MovieListItem = await prisma.movieListItem.create({
     *   data: {
     *     // ... data to create a MovieListItem
     *   }
     * })
     *
     */
    create<T extends MovieListItemCreateArgs>(
      args: SelectSubset<T, MovieListItemCreateArgs<ExtArgs>>
    ): Prisma__MovieListItemClient<
      $Result.GetResult<Prisma.$MovieListItemPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many MovieListItems.
     * @param {MovieListItemCreateManyArgs} args - Arguments to create many MovieListItems.
     * @example
     * // Create many MovieListItems
     * const movieListItem = await prisma.movieListItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MovieListItemCreateManyArgs>(
      args?: SelectSubset<T, MovieListItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many MovieListItems and returns the data saved in the database.
     * @param {MovieListItemCreateManyAndReturnArgs} args - Arguments to create many MovieListItems.
     * @example
     * // Create many MovieListItems
     * const movieListItem = await prisma.movieListItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MovieListItems and only return the `id`
     * const movieListItemWithIdOnly = await prisma.movieListItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MovieListItemCreateManyAndReturnArgs>(
      args?: SelectSubset<T, MovieListItemCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MovieListItemPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a MovieListItem.
     * @param {MovieListItemDeleteArgs} args - Arguments to delete one MovieListItem.
     * @example
     * // Delete one MovieListItem
     * const MovieListItem = await prisma.movieListItem.delete({
     *   where: {
     *     // ... filter to delete one MovieListItem
     *   }
     * })
     *
     */
    delete<T extends MovieListItemDeleteArgs>(
      args: SelectSubset<T, MovieListItemDeleteArgs<ExtArgs>>
    ): Prisma__MovieListItemClient<
      $Result.GetResult<Prisma.$MovieListItemPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one MovieListItem.
     * @param {MovieListItemUpdateArgs} args - Arguments to update one MovieListItem.
     * @example
     * // Update one MovieListItem
     * const movieListItem = await prisma.movieListItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MovieListItemUpdateArgs>(
      args: SelectSubset<T, MovieListItemUpdateArgs<ExtArgs>>
    ): Prisma__MovieListItemClient<
      $Result.GetResult<Prisma.$MovieListItemPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more MovieListItems.
     * @param {MovieListItemDeleteManyArgs} args - Arguments to filter MovieListItems to delete.
     * @example
     * // Delete a few MovieListItems
     * const { count } = await prisma.movieListItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MovieListItemDeleteManyArgs>(
      args?: SelectSubset<T, MovieListItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more MovieListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieListItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieListItems
     * const movieListItem = await prisma.movieListItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MovieListItemUpdateManyArgs>(
      args: SelectSubset<T, MovieListItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one MovieListItem.
     * @param {MovieListItemUpsertArgs} args - Arguments to update or create a MovieListItem.
     * @example
     * // Update or create a MovieListItem
     * const movieListItem = await prisma.movieListItem.upsert({
     *   create: {
     *     // ... data to create a MovieListItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieListItem we want to update
     *   }
     * })
     */
    upsert<T extends MovieListItemUpsertArgs>(
      args: SelectSubset<T, MovieListItemUpsertArgs<ExtArgs>>
    ): Prisma__MovieListItemClient<
      $Result.GetResult<Prisma.$MovieListItemPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of MovieListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieListItemCountArgs} args - Arguments to filter MovieListItems to count.
     * @example
     * // Count the number of MovieListItems
     * const count = await prisma.movieListItem.count({
     *   where: {
     *     // ... the filter for the MovieListItems we want to count
     *   }
     * })
     **/
    count<T extends MovieListItemCountArgs>(
      args?: Subset<T, MovieListItemCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieListItemCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a MovieListItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieListItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MovieListItemAggregateArgs>(
      args: Subset<T, MovieListItemAggregateArgs>
    ): Prisma.PrismaPromise<GetMovieListItemAggregateType<T>>;

    /**
     * Group by MovieListItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieListItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends MovieListItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieListItemGroupByArgs['orderBy'] }
        : { orderBy?: MovieListItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MovieListItemGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetMovieListItemGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MovieListItem model
     */
    readonly fields: MovieListItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieListItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieListItemClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    movieList<T extends MovieListDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, MovieListDefaultArgs<ExtArgs>>
    ): Prisma__MovieListClient<
      | $Result.GetResult<
          Prisma.$MovieListPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, MovieDefaultArgs<ExtArgs>>
    ): Prisma__MovieClient<
      | $Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the MovieListItem model
   */
  interface MovieListItemFieldRefs {
    readonly id: FieldRef<'MovieListItem', 'String'>;
    readonly movieListId: FieldRef<'MovieListItem', 'String'>;
    readonly movieId: FieldRef<'MovieListItem', 'String'>;
    readonly notes: FieldRef<'MovieListItem', 'String'>;
    readonly rating: FieldRef<'MovieListItem', 'Int'>;
    readonly watchedAt: FieldRef<'MovieListItem', 'DateTime'>;
    readonly addedAt: FieldRef<'MovieListItem', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * MovieListItem findUnique
   */
  export type MovieListItemFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieListItem
     */
    select?: MovieListItemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListItemInclude<ExtArgs> | null;
    /**
     * Filter, which MovieListItem to fetch.
     */
    where: MovieListItemWhereUniqueInput;
  };

  /**
   * MovieListItem findUniqueOrThrow
   */
  export type MovieListItemFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieListItem
     */
    select?: MovieListItemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListItemInclude<ExtArgs> | null;
    /**
     * Filter, which MovieListItem to fetch.
     */
    where: MovieListItemWhereUniqueInput;
  };

  /**
   * MovieListItem findFirst
   */
  export type MovieListItemFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieListItem
     */
    select?: MovieListItemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListItemInclude<ExtArgs> | null;
    /**
     * Filter, which MovieListItem to fetch.
     */
    where?: MovieListItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MovieListItems to fetch.
     */
    orderBy?:
      | MovieListItemOrderByWithRelationInput
      | MovieListItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MovieListItems.
     */
    cursor?: MovieListItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MovieListItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MovieListItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MovieListItems.
     */
    distinct?: MovieListItemScalarFieldEnum | MovieListItemScalarFieldEnum[];
  };

  /**
   * MovieListItem findFirstOrThrow
   */
  export type MovieListItemFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieListItem
     */
    select?: MovieListItemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListItemInclude<ExtArgs> | null;
    /**
     * Filter, which MovieListItem to fetch.
     */
    where?: MovieListItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MovieListItems to fetch.
     */
    orderBy?:
      | MovieListItemOrderByWithRelationInput
      | MovieListItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MovieListItems.
     */
    cursor?: MovieListItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MovieListItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MovieListItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MovieListItems.
     */
    distinct?: MovieListItemScalarFieldEnum | MovieListItemScalarFieldEnum[];
  };

  /**
   * MovieListItem findMany
   */
  export type MovieListItemFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieListItem
     */
    select?: MovieListItemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListItemInclude<ExtArgs> | null;
    /**
     * Filter, which MovieListItems to fetch.
     */
    where?: MovieListItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MovieListItems to fetch.
     */
    orderBy?:
      | MovieListItemOrderByWithRelationInput
      | MovieListItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MovieListItems.
     */
    cursor?: MovieListItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MovieListItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MovieListItems.
     */
    skip?: number;
    distinct?: MovieListItemScalarFieldEnum | MovieListItemScalarFieldEnum[];
  };

  /**
   * MovieListItem create
   */
  export type MovieListItemCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieListItem
     */
    select?: MovieListItemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListItemInclude<ExtArgs> | null;
    /**
     * The data needed to create a MovieListItem.
     */
    data: XOR<MovieListItemCreateInput, MovieListItemUncheckedCreateInput>;
  };

  /**
   * MovieListItem createMany
   */
  export type MovieListItemCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many MovieListItems.
     */
    data: MovieListItemCreateManyInput | MovieListItemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * MovieListItem createManyAndReturn
   */
  export type MovieListItemCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieListItem
     */
    select?: MovieListItemSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many MovieListItems.
     */
    data: MovieListItemCreateManyInput | MovieListItemCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListItemIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * MovieListItem update
   */
  export type MovieListItemUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieListItem
     */
    select?: MovieListItemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListItemInclude<ExtArgs> | null;
    /**
     * The data needed to update a MovieListItem.
     */
    data: XOR<MovieListItemUpdateInput, MovieListItemUncheckedUpdateInput>;
    /**
     * Choose, which MovieListItem to update.
     */
    where: MovieListItemWhereUniqueInput;
  };

  /**
   * MovieListItem updateMany
   */
  export type MovieListItemUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update MovieListItems.
     */
    data: XOR<
      MovieListItemUpdateManyMutationInput,
      MovieListItemUncheckedUpdateManyInput
    >;
    /**
     * Filter which MovieListItems to update
     */
    where?: MovieListItemWhereInput;
  };

  /**
   * MovieListItem upsert
   */
  export type MovieListItemUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieListItem
     */
    select?: MovieListItemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListItemInclude<ExtArgs> | null;
    /**
     * The filter to search for the MovieListItem to update in case it exists.
     */
    where: MovieListItemWhereUniqueInput;
    /**
     * In case the MovieListItem found by the `where` argument doesn't exist, create a new MovieListItem with this data.
     */
    create: XOR<MovieListItemCreateInput, MovieListItemUncheckedCreateInput>;
    /**
     * In case the MovieListItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieListItemUpdateInput, MovieListItemUncheckedUpdateInput>;
  };

  /**
   * MovieListItem delete
   */
  export type MovieListItemDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieListItem
     */
    select?: MovieListItemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListItemInclude<ExtArgs> | null;
    /**
     * Filter which MovieListItem to delete.
     */
    where: MovieListItemWhereUniqueInput;
  };

  /**
   * MovieListItem deleteMany
   */
  export type MovieListItemDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MovieListItems to delete
     */
    where?: MovieListItemWhereInput;
  };

  /**
   * MovieListItem without action
   */
  export type MovieListItemDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieListItem
     */
    select?: MovieListItemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListItemInclude<ExtArgs> | null;
  };

  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  export type ReviewAvgAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewSumAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewMinAggregateOutputType = {
    id: string | null;
    content: string | null;
    rating: number | null;
    movieId: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ReviewMaxAggregateOutputType = {
    id: string | null;
    content: string | null;
    rating: number | null;
    movieId: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ReviewCountAggregateOutputType = {
    id: number;
    content: number;
    rating: number;
    movieId: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ReviewAvgAggregateInputType = {
    rating?: true;
  };

  export type ReviewSumAggregateInputType = {
    rating?: true;
  };

  export type ReviewMinAggregateInputType = {
    id?: true;
    content?: true;
    rating?: true;
    movieId?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ReviewMaxAggregateInputType = {
    id?: true;
    content?: true;
    rating?: true;
    movieId?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ReviewCountAggregateInputType = {
    id?: true;
    content?: true;
    rating?: true;
    movieId?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ReviewAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Reviews
     **/
    _count?: true | ReviewCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ReviewAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ReviewSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ReviewMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ReviewMaxAggregateInputType;
  };

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
    [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>;
  };

  export type ReviewGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReviewWhereInput;
    orderBy?:
      | ReviewOrderByWithAggregationInput
      | ReviewOrderByWithAggregationInput[];
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum;
    having?: ReviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReviewCountAggregateInputType | true;
    _avg?: ReviewAvgAggregateInputType;
    _sum?: ReviewSumAggregateInputType;
    _min?: ReviewMinAggregateInputType;
    _max?: ReviewMaxAggregateInputType;
  };

  export type ReviewGroupByOutputType = {
    id: string;
    content: string;
    rating: number;
    movieId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ReviewGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ReviewGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>;
        }
      >
    >;

  export type ReviewSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      rating?: boolean;
      movieId?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      movie?: boolean | MovieDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      likes?: boolean | Review$likesArgs<ExtArgs>;
      _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['review']
  >;

  export type ReviewSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      rating?: boolean;
      movieId?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      movie?: boolean | MovieDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['review']
  >;

  export type ReviewSelectScalar = {
    id?: boolean;
    content?: boolean;
    rating?: boolean;
    movieId?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ReviewInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
    likes?: boolean | Review$likesArgs<ExtArgs>;
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ReviewIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ReviewPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Review';
    objects: {
      movie: Prisma.$MoviePayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
      likes: Prisma.$LikePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        content: string;
        rating: number;
        movieId: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['review']
    >;
    composites: {};
  };

  type ReviewGetPayload<
    S extends boolean | null | undefined | ReviewDefaultArgs,
  > = $Result.GetResult<Prisma.$ReviewPayload, S>;

  type ReviewCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: ReviewCountAggregateInputType | true;
  };

  export interface ReviewDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Review'];
      meta: { name: 'Review' };
    };
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(
      args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>
    ): Prisma__ReviewClient<
      $Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReviewClient<
      $Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(
      args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>
    ): Prisma__ReviewClient<
      $Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReviewClient<
      $Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     *
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ReviewFindManyArgs>(
      args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     *
     */
    create<T extends ReviewCreateArgs>(
      args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>
    ): Prisma__ReviewClient<
      $Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ReviewCreateManyArgs>(
      args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     *
     */
    delete<T extends ReviewDeleteArgs>(
      args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>
    ): Prisma__ReviewClient<
      $Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ReviewUpdateArgs>(
      args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>
    ): Prisma__ReviewClient<
      $Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ReviewDeleteManyArgs>(
      args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ReviewUpdateManyArgs>(
      args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(
      args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>
    ): Prisma__ReviewClient<
      $Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
     **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ReviewAggregateArgs>(
      args: Subset<T, ReviewAggregateArgs>
    ): Prisma.PrismaPromise<GetReviewAggregateType<T>>;

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetReviewGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Review model
     */
    readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, MovieDefaultArgs<ExtArgs>>
    ): Prisma__MovieClient<
      | $Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;
    likes<T extends Review$likesArgs<ExtArgs> = {}>(
      args?: Subset<T, Review$likesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'findMany'> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<'Review', 'String'>;
    readonly content: FieldRef<'Review', 'String'>;
    readonly rating: FieldRef<'Review', 'Int'>;
    readonly movieId: FieldRef<'Review', 'String'>;
    readonly userId: FieldRef<'Review', 'String'>;
    readonly createdAt: FieldRef<'Review', 'DateTime'>;
    readonly updatedAt: FieldRef<'Review', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput;
  };

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput;
  };

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reviews.
     */
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * Review create
   */
  export type ReviewCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>;
  };

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Review update
   */
  export type ReviewUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>;
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput;
  };

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>;
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput;
  };

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput;
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>;
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>;
  };

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput;
  };

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput;
  };

  /**
   * Review.likes
   */
  export type Review$likesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    where?: LikeWhereInput;
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[];
    cursor?: LikeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[];
  };

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
  };

  /**
   * Model Follow
   */

  export type AggregateFollow = {
    _count: FollowCountAggregateOutputType | null;
    _min: FollowMinAggregateOutputType | null;
    _max: FollowMaxAggregateOutputType | null;
  };

  export type FollowMinAggregateOutputType = {
    id: string | null;
    followerId: string | null;
    followingId: string | null;
    createdAt: Date | null;
  };

  export type FollowMaxAggregateOutputType = {
    id: string | null;
    followerId: string | null;
    followingId: string | null;
    createdAt: Date | null;
  };

  export type FollowCountAggregateOutputType = {
    id: number;
    followerId: number;
    followingId: number;
    createdAt: number;
    _all: number;
  };

  export type FollowMinAggregateInputType = {
    id?: true;
    followerId?: true;
    followingId?: true;
    createdAt?: true;
  };

  export type FollowMaxAggregateInputType = {
    id?: true;
    followerId?: true;
    followingId?: true;
    createdAt?: true;
  };

  export type FollowCountAggregateInputType = {
    id?: true;
    followerId?: true;
    followingId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type FollowAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Follow to aggregate.
     */
    where?: FollowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: FollowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Follows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Follows
     **/
    _count?: true | FollowCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FollowMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FollowMaxAggregateInputType;
  };

  export type GetFollowAggregateType<T extends FollowAggregateArgs> = {
    [P in keyof T & keyof AggregateFollow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollow[P]>
      : GetScalarType<T[P], AggregateFollow[P]>;
  };

  export type FollowGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FollowWhereInput;
    orderBy?:
      | FollowOrderByWithAggregationInput
      | FollowOrderByWithAggregationInput[];
    by: FollowScalarFieldEnum[] | FollowScalarFieldEnum;
    having?: FollowScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FollowCountAggregateInputType | true;
    _min?: FollowMinAggregateInputType;
    _max?: FollowMaxAggregateInputType;
  };

  export type FollowGroupByOutputType = {
    id: string;
    followerId: string;
    followingId: string;
    createdAt: Date;
    _count: FollowCountAggregateOutputType | null;
    _min: FollowMinAggregateOutputType | null;
    _max: FollowMaxAggregateOutputType | null;
  };

  type GetFollowGroupByPayload<T extends FollowGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<FollowGroupByOutputType, T['by']> & {
          [P in keyof T & keyof FollowGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowGroupByOutputType[P]>
            : GetScalarType<T[P], FollowGroupByOutputType[P]>;
        }
      >
    >;

  export type FollowSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      followerId?: boolean;
      followingId?: boolean;
      createdAt?: boolean;
      follower?: boolean | UserDefaultArgs<ExtArgs>;
      following?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['follow']
  >;

  export type FollowSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      followerId?: boolean;
      followingId?: boolean;
      createdAt?: boolean;
      follower?: boolean | UserDefaultArgs<ExtArgs>;
      following?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['follow']
  >;

  export type FollowSelectScalar = {
    id?: boolean;
    followerId?: boolean;
    followingId?: boolean;
    createdAt?: boolean;
  };

  export type FollowInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    follower?: boolean | UserDefaultArgs<ExtArgs>;
    following?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type FollowIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    follower?: boolean | UserDefaultArgs<ExtArgs>;
    following?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $FollowPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Follow';
    objects: {
      follower: Prisma.$UserPayload<ExtArgs>;
      following: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        followerId: string;
        followingId: string;
        createdAt: Date;
      },
      ExtArgs['result']['follow']
    >;
    composites: {};
  };

  type FollowGetPayload<
    S extends boolean | null | undefined | FollowDefaultArgs,
  > = $Result.GetResult<Prisma.$FollowPayload, S>;

  type FollowCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<FollowFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: FollowCountAggregateInputType | true;
  };

  export interface FollowDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Follow'];
      meta: { name: 'Follow' };
    };
    /**
     * Find zero or one Follow that matches the filter.
     * @param {FollowFindUniqueArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowFindUniqueArgs>(
      args: SelectSubset<T, FollowFindUniqueArgs<ExtArgs>>
    ): Prisma__FollowClient<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Follow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowFindUniqueOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowFindUniqueOrThrowArgs>(
      args: SelectSubset<T, FollowFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FollowClient<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Follow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowFindFirstArgs>(
      args?: SelectSubset<T, FollowFindFirstArgs<ExtArgs>>
    ): Prisma__FollowClient<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Follow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FollowFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FollowClient<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follow.findMany()
     *
     * // Get first 10 Follows
     * const follows = await prisma.follow.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const followWithIdOnly = await prisma.follow.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FollowFindManyArgs>(
      args?: SelectSubset<T, FollowFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Follow.
     * @param {FollowCreateArgs} args - Arguments to create a Follow.
     * @example
     * // Create one Follow
     * const Follow = await prisma.follow.create({
     *   data: {
     *     // ... data to create a Follow
     *   }
     * })
     *
     */
    create<T extends FollowCreateArgs>(
      args: SelectSubset<T, FollowCreateArgs<ExtArgs>>
    ): Prisma__FollowClient<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Follows.
     * @param {FollowCreateManyArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FollowCreateManyArgs>(
      args?: SelectSubset<T, FollowCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Follows and returns the data saved in the database.
     * @param {FollowCreateManyAndReturnArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Follows and only return the `id`
     * const followWithIdOnly = await prisma.follow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FollowCreateManyAndReturnArgs>(
      args?: SelectSubset<T, FollowCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FollowPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Follow.
     * @param {FollowDeleteArgs} args - Arguments to delete one Follow.
     * @example
     * // Delete one Follow
     * const Follow = await prisma.follow.delete({
     *   where: {
     *     // ... filter to delete one Follow
     *   }
     * })
     *
     */
    delete<T extends FollowDeleteArgs>(
      args: SelectSubset<T, FollowDeleteArgs<ExtArgs>>
    ): Prisma__FollowClient<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Follow.
     * @param {FollowUpdateArgs} args - Arguments to update one Follow.
     * @example
     * // Update one Follow
     * const follow = await prisma.follow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FollowUpdateArgs>(
      args: SelectSubset<T, FollowUpdateArgs<ExtArgs>>
    ): Prisma__FollowClient<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Follows.
     * @param {FollowDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FollowDeleteManyArgs>(
      args?: SelectSubset<T, FollowDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FollowUpdateManyArgs>(
      args: SelectSubset<T, FollowUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Follow.
     * @param {FollowUpsertArgs} args - Arguments to update or create a Follow.
     * @example
     * // Update or create a Follow
     * const follow = await prisma.follow.upsert({
     *   create: {
     *     // ... data to create a Follow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follow we want to update
     *   }
     * })
     */
    upsert<T extends FollowUpsertArgs>(
      args: SelectSubset<T, FollowUpsertArgs<ExtArgs>>
    ): Prisma__FollowClient<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follow.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
     **/
    count<T extends FollowCountArgs>(
      args?: Subset<T, FollowCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends FollowAggregateArgs>(
      args: Subset<T, FollowAggregateArgs>
    ): Prisma.PrismaPromise<GetFollowAggregateType<T>>;

    /**
     * Group by Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends FollowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowGroupByArgs['orderBy'] }
        : { orderBy?: FollowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, FollowGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetFollowGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Follow model
     */
    readonly fields: FollowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Follow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    follower<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;
    following<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Follow model
   */
  interface FollowFieldRefs {
    readonly id: FieldRef<'Follow', 'String'>;
    readonly followerId: FieldRef<'Follow', 'String'>;
    readonly followingId: FieldRef<'Follow', 'String'>;
    readonly createdAt: FieldRef<'Follow', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Follow findUnique
   */
  export type FollowFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null;
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput;
  };

  /**
   * Follow findUniqueOrThrow
   */
  export type FollowFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null;
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput;
  };

  /**
   * Follow findFirst
   */
  export type FollowFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null;
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Follows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[];
  };

  /**
   * Follow findFirstOrThrow
   */
  export type FollowFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null;
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Follows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[];
  };

  /**
   * Follow findMany
   */
  export type FollowFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null;
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Follows.
     */
    cursor?: FollowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Follows.
     */
    skip?: number;
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[];
  };

  /**
   * Follow create
   */
  export type FollowCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null;
    /**
     * The data needed to create a Follow.
     */
    data: XOR<FollowCreateInput, FollowUncheckedCreateInput>;
  };

  /**
   * Follow createMany
   */
  export type FollowCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Follow createManyAndReturn
   */
  export type FollowCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Follow update
   */
  export type FollowUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null;
    /**
     * The data needed to update a Follow.
     */
    data: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>;
    /**
     * Choose, which Follow to update.
     */
    where: FollowWhereUniqueInput;
  };

  /**
   * Follow updateMany
   */
  export type FollowUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyInput>;
    /**
     * Filter which Follows to update
     */
    where?: FollowWhereInput;
  };

  /**
   * Follow upsert
   */
  export type FollowUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null;
    /**
     * The filter to search for the Follow to update in case it exists.
     */
    where: FollowWhereUniqueInput;
    /**
     * In case the Follow found by the `where` argument doesn't exist, create a new Follow with this data.
     */
    create: XOR<FollowCreateInput, FollowUncheckedCreateInput>;
    /**
     * In case the Follow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>;
  };

  /**
   * Follow delete
   */
  export type FollowDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null;
    /**
     * Filter which Follow to delete.
     */
    where: FollowWhereUniqueInput;
  };

  /**
   * Follow deleteMany
   */
  export type FollowDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Follows to delete
     */
    where?: FollowWhereInput;
  };

  /**
   * Follow without action
   */
  export type FollowDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null;
  };

  /**
   * Model Like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null;
    _min: LikeMinAggregateOutputType | null;
    _max: LikeMaxAggregateOutputType | null;
  };

  export type LikeMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    movieId: string | null;
    reviewId: string | null;
    createdAt: Date | null;
  };

  export type LikeMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    movieId: string | null;
    reviewId: string | null;
    createdAt: Date | null;
  };

  export type LikeCountAggregateOutputType = {
    id: number;
    userId: number;
    movieId: number;
    reviewId: number;
    createdAt: number;
    _all: number;
  };

  export type LikeMinAggregateInputType = {
    id?: true;
    userId?: true;
    movieId?: true;
    reviewId?: true;
    createdAt?: true;
  };

  export type LikeMaxAggregateInputType = {
    id?: true;
    userId?: true;
    movieId?: true;
    reviewId?: true;
    createdAt?: true;
  };

  export type LikeCountAggregateInputType = {
    id?: true;
    userId?: true;
    movieId?: true;
    reviewId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type LikeAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Like to aggregate.
     */
    where?: LikeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: LikeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Likes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Likes
     **/
    _count?: true | LikeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LikeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LikeMaxAggregateInputType;
  };

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
    [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>;
  };

  export type LikeGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LikeWhereInput;
    orderBy?:
      | LikeOrderByWithAggregationInput
      | LikeOrderByWithAggregationInput[];
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum;
    having?: LikeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LikeCountAggregateInputType | true;
    _min?: LikeMinAggregateInputType;
    _max?: LikeMaxAggregateInputType;
  };

  export type LikeGroupByOutputType = {
    id: string;
    userId: string;
    movieId: string | null;
    reviewId: string | null;
    createdAt: Date;
    _count: LikeCountAggregateOutputType | null;
    _min: LikeMinAggregateOutputType | null;
    _max: LikeMaxAggregateOutputType | null;
  };

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> & {
        [P in keyof T & keyof LikeGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
          : GetScalarType<T[P], LikeGroupByOutputType[P]>;
      }
    >
  >;

  export type LikeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      movieId?: boolean;
      reviewId?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      movie?: boolean | Like$movieArgs<ExtArgs>;
      review?: boolean | Like$reviewArgs<ExtArgs>;
    },
    ExtArgs['result']['like']
  >;

  export type LikeSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      movieId?: boolean;
      reviewId?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      movie?: boolean | Like$movieArgs<ExtArgs>;
      review?: boolean | Like$reviewArgs<ExtArgs>;
    },
    ExtArgs['result']['like']
  >;

  export type LikeSelectScalar = {
    id?: boolean;
    userId?: boolean;
    movieId?: boolean;
    reviewId?: boolean;
    createdAt?: boolean;
  };

  export type LikeInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    movie?: boolean | Like$movieArgs<ExtArgs>;
    review?: boolean | Like$reviewArgs<ExtArgs>;
  };
  export type LikeIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    movie?: boolean | Like$movieArgs<ExtArgs>;
    review?: boolean | Like$reviewArgs<ExtArgs>;
  };

  export type $LikePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Like';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      movie: Prisma.$MoviePayload<ExtArgs> | null;
      review: Prisma.$ReviewPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        movieId: string | null;
        reviewId: string | null;
        createdAt: Date;
      },
      ExtArgs['result']['like']
    >;
    composites: {};
  };

  type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> =
    $Result.GetResult<Prisma.$LikePayload, S>;

  type LikeCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: LikeCountAggregateInputType | true;
  };

  export interface LikeDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Like'];
      meta: { name: 'Like' };
    };
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeFindUniqueArgs>(
      args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>
    ): Prisma__LikeClient<
      $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(
      args: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LikeClient<
      $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeFindFirstArgs>(
      args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>
    ): Prisma__LikeClient<
      $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LikeClient<
      $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     *
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LikeFindManyArgs>(
      args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     *
     */
    create<T extends LikeCreateArgs>(
      args: SelectSubset<T, LikeCreateArgs<ExtArgs>>
    ): Prisma__LikeClient<
      $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Likes.
     * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LikeCreateManyArgs>(
      args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikeCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LikeCreateManyAndReturnArgs>(
      args?: SelectSubset<T, LikeCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'createManyAndReturn'>
    >;

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     *
     */
    delete<T extends LikeDeleteArgs>(
      args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>
    ): Prisma__LikeClient<
      $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LikeUpdateArgs>(
      args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>
    ): Prisma__LikeClient<
      $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LikeDeleteManyArgs>(
      args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LikeUpdateManyArgs>(
      args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends LikeUpsertArgs>(
      args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>
    ): Prisma__LikeClient<
      $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
     **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends LikeAggregateArgs>(
      args: Subset<T, LikeAggregateArgs>
    ): Prisma.PrismaPromise<GetLikeAggregateType<T>>;

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetLikeGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Like model
     */
    readonly fields: LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;
    movie<T extends Like$movieArgs<ExtArgs> = {}>(
      args?: Subset<T, Like$movieArgs<ExtArgs>>
    ): Prisma__MovieClient<
      $Result.GetResult<
        Prisma.$MoviePayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
      ExtArgs
    >;
    review<T extends Like$reviewArgs<ExtArgs> = {}>(
      args?: Subset<T, Like$reviewArgs<ExtArgs>>
    ): Prisma__ReviewClient<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Like model
   */
  interface LikeFieldRefs {
    readonly id: FieldRef<'Like', 'String'>;
    readonly userId: FieldRef<'Like', 'String'>;
    readonly movieId: FieldRef<'Like', 'String'>;
    readonly reviewId: FieldRef<'Like', 'String'>;
    readonly createdAt: FieldRef<'Like', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput;
  };

  /**
   * Like findUniqueOrThrow
   */
  export type LikeFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput;
  };

  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Likes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[];
  };

  /**
   * Like findFirstOrThrow
   */
  export type LikeFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Likes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[];
  };

  /**
   * Like findMany
   */
  export type LikeFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Likes.
     */
    cursor?: LikeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Likes.
     */
    skip?: number;
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[];
  };

  /**
   * Like create
   */
  export type LikeCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    /**
     * The data needed to create a Like.
     */
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>;
  };

  /**
   * Like createMany
   */
  export type LikeCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Like createManyAndReturn
   */
  export type LikeCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Like update
   */
  export type LikeUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    /**
     * The data needed to update a Like.
     */
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>;
    /**
     * Choose, which Like to update.
     */
    where: LikeWhereUniqueInput;
  };

  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>;
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput;
  };

  /**
   * Like upsert
   */
  export type LikeUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: LikeWhereUniqueInput;
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>;
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>;
  };

  /**
   * Like delete
   */
  export type LikeDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    /**
     * Filter which Like to delete.
     */
    where: LikeWhereUniqueInput;
  };

  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Likes to delete
     */
    where?: LikeWhereInput;
  };

  /**
   * Like.movie
   */
  export type Like$movieArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
    where?: MovieWhereInput;
  };

  /**
   * Like.review
   */
  export type Like$reviewArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    where?: ReviewWhereInput;
  };

  /**
   * Like without action
   */
  export type LikeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
  };

  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null;
    _min: ActivityMinAggregateOutputType | null;
    _max: ActivityMaxAggregateOutputType | null;
  };

  export type ActivityMinAggregateOutputType = {
    id: string | null;
    type: $Enums.ActivityType | null;
    userId: string | null;
    createdAt: Date | null;
  };

  export type ActivityMaxAggregateOutputType = {
    id: string | null;
    type: $Enums.ActivityType | null;
    userId: string | null;
    createdAt: Date | null;
  };

  export type ActivityCountAggregateOutputType = {
    id: number;
    type: number;
    userId: number;
    data: number;
    createdAt: number;
    _all: number;
  };

  export type ActivityMinAggregateInputType = {
    id?: true;
    type?: true;
    userId?: true;
    createdAt?: true;
  };

  export type ActivityMaxAggregateInputType = {
    id?: true;
    type?: true;
    userId?: true;
    createdAt?: true;
  };

  export type ActivityCountAggregateInputType = {
    id?: true;
    type?: true;
    userId?: true;
    data?: true;
    createdAt?: true;
    _all?: true;
  };

  export type ActivityAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Activities to fetch.
     */
    orderBy?:
      | ActivityOrderByWithRelationInput
      | ActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Activities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Activities
     **/
    _count?: true | ActivityCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ActivityMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ActivityMaxAggregateInputType;
  };

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
    [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>;
  };

  export type ActivityGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ActivityWhereInput;
    orderBy?:
      | ActivityOrderByWithAggregationInput
      | ActivityOrderByWithAggregationInput[];
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum;
    having?: ActivityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ActivityCountAggregateInputType | true;
    _min?: ActivityMinAggregateInputType;
    _max?: ActivityMaxAggregateInputType;
  };

  export type ActivityGroupByOutputType = {
    id: string;
    type: $Enums.ActivityType;
    userId: string;
    data: JsonValue;
    createdAt: Date;
    _count: ActivityCountAggregateOutputType | null;
    _min: ActivityMinAggregateOutputType | null;
    _max: ActivityMaxAggregateOutputType | null;
  };

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ActivityGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ActivityGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>;
        }
      >
    >;

  export type ActivitySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      type?: boolean;
      userId?: boolean;
      data?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['activity']
  >;

  export type ActivitySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      type?: boolean;
      userId?: boolean;
      data?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['activity']
  >;

  export type ActivitySelectScalar = {
    id?: boolean;
    type?: boolean;
    userId?: boolean;
    data?: boolean;
    createdAt?: boolean;
  };

  export type ActivityInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ActivityIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ActivityPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Activity';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        type: $Enums.ActivityType;
        userId: string;
        data: Prisma.JsonValue;
        createdAt: Date;
      },
      ExtArgs['result']['activity']
    >;
    composites: {};
  };

  type ActivityGetPayload<
    S extends boolean | null | undefined | ActivityDefaultArgs,
  > = $Result.GetResult<Prisma.$ActivityPayload, S>;

  type ActivityCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: ActivityCountAggregateInputType | true;
  };

  export interface ActivityDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Activity'];
      meta: { name: 'Activity' };
    };
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(
      args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>
    ): Prisma__ActivityClient<
      $Result.GetResult<
        Prisma.$ActivityPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ActivityClient<
      $Result.GetResult<
        Prisma.$ActivityPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(
      args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>
    ): Prisma__ActivityClient<
      $Result.GetResult<
        Prisma.$ActivityPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ActivityClient<
      $Result.GetResult<
        Prisma.$ActivityPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     *
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ActivityFindManyArgs>(
      args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     *
     */
    create<T extends ActivityCreateArgs>(
      args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>
    ): Prisma__ActivityClient<
      $Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ActivityCreateManyArgs>(
      args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ActivityPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     *
     */
    delete<T extends ActivityDeleteArgs>(
      args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>
    ): Prisma__ActivityClient<
      $Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ActivityUpdateArgs>(
      args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>
    ): Prisma__ActivityClient<
      $Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ActivityDeleteManyArgs>(
      args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ActivityUpdateManyArgs>(
      args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(
      args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>
    ): Prisma__ActivityClient<
      $Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
     **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ActivityAggregateArgs>(
      args: Subset<T, ActivityAggregateArgs>
    ): Prisma.PrismaPromise<GetActivityAggregateType<T>>;

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetActivityGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Activity model
     */
    readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<'Activity', 'String'>;
    readonly type: FieldRef<'Activity', 'ActivityType'>;
    readonly userId: FieldRef<'Activity', 'String'>;
    readonly data: FieldRef<'Activity', 'Json'>;
    readonly createdAt: FieldRef<'Activity', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null;
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput;
  };

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null;
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput;
  };

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null;
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Activities to fetch.
     */
    orderBy?:
      | ActivityOrderByWithRelationInput
      | ActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Activities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[];
  };

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null;
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Activities to fetch.
     */
    orderBy?:
      | ActivityOrderByWithRelationInput
      | ActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Activities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[];
  };

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null;
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Activities to fetch.
     */
    orderBy?:
      | ActivityOrderByWithRelationInput
      | ActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Activities.
     */
    skip?: number;
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[];
  };

  /**
   * Activity create
   */
  export type ActivityCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null;
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>;
  };

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null;
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>;
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput;
  };

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Activities.
     */
    data: XOR<
      ActivityUpdateManyMutationInput,
      ActivityUncheckedUpdateManyInput
    >;
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput;
  };

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null;
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput;
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>;
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>;
  };

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null;
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput;
  };

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput;
  };

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    username: 'username';
    displayName: 'displayName';
    avatar: 'avatar';
    bio: 'bio';
    password: 'password';
    verified: 'verified';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const MovieScalarFieldEnum: {
    id: 'id';
    tmdbId: 'tmdbId';
    title: 'title';
    overview: 'overview';
    releaseDate: 'releaseDate';
    runtime: 'runtime';
    posterPath: 'posterPath';
    backdropPath: 'backdropPath';
    voteAverage: 'voteAverage';
    genres: 'genres';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type MovieScalarFieldEnum =
    (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum];

  export const MovieListScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    type: 'type';
    privacy: 'privacy';
    userId: 'userId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type MovieListScalarFieldEnum =
    (typeof MovieListScalarFieldEnum)[keyof typeof MovieListScalarFieldEnum];

  export const MovieListItemScalarFieldEnum: {
    id: 'id';
    movieListId: 'movieListId';
    movieId: 'movieId';
    notes: 'notes';
    rating: 'rating';
    watchedAt: 'watchedAt';
    addedAt: 'addedAt';
  };

  export type MovieListItemScalarFieldEnum =
    (typeof MovieListItemScalarFieldEnum)[keyof typeof MovieListItemScalarFieldEnum];

  export const ReviewScalarFieldEnum: {
    id: 'id';
    content: 'content';
    rating: 'rating';
    movieId: 'movieId';
    userId: 'userId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type ReviewScalarFieldEnum =
    (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];

  export const FollowScalarFieldEnum: {
    id: 'id';
    followerId: 'followerId';
    followingId: 'followingId';
    createdAt: 'createdAt';
  };

  export type FollowScalarFieldEnum =
    (typeof FollowScalarFieldEnum)[keyof typeof FollowScalarFieldEnum];

  export const LikeScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    movieId: 'movieId';
    reviewId: 'reviewId';
    createdAt: 'createdAt';
  };

  export type LikeScalarFieldEnum =
    (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum];

  export const ActivityScalarFieldEnum: {
    id: 'id';
    type: 'type';
    userId: 'userId';
    data: 'data';
    createdAt: 'createdAt';
  };

  export type ActivityScalarFieldEnum =
    (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull;
  };

  export type JsonNullValueInput =
    (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Reference to a field of type 'MovieListType'
   */
  export type EnumMovieListTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'MovieListType'
  >;

  /**
   * Reference to a field of type 'MovieListType[]'
   */
  export type ListEnumMovieListTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'MovieListType[]'>;

  /**
   * Reference to a field of type 'PrivacyLevel'
   */
  export type EnumPrivacyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'PrivacyLevel'
  >;

  /**
   * Reference to a field of type 'PrivacyLevel[]'
   */
  export type ListEnumPrivacyLevelFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'PrivacyLevel[]'>;

  /**
   * Reference to a field of type 'ActivityType'
   */
  export type EnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'ActivityType'
  >;

  /**
   * Reference to a field of type 'ActivityType[]'
   */
  export type ListEnumActivityTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'ActivityType[]'>;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Json'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: UuidFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    username?: StringFilter<'User'> | string;
    displayName?: StringNullableFilter<'User'> | string | null;
    avatar?: StringNullableFilter<'User'> | string | null;
    bio?: StringNullableFilter<'User'> | string | null;
    password?: StringFilter<'User'> | string;
    verified?: BoolFilter<'User'> | boolean;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
    movieLists?: MovieListListRelationFilter;
    reviews?: ReviewListRelationFilter;
    followers?: FollowListRelationFilter;
    following?: FollowListRelationFilter;
    likes?: LikeListRelationFilter;
    activities?: ActivityListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    username?: SortOrder;
    displayName?: SortOrderInput | SortOrder;
    avatar?: SortOrderInput | SortOrder;
    bio?: SortOrderInput | SortOrder;
    password?: SortOrder;
    verified?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    movieLists?: MovieListOrderByRelationAggregateInput;
    reviews?: ReviewOrderByRelationAggregateInput;
    followers?: FollowOrderByRelationAggregateInput;
    following?: FollowOrderByRelationAggregateInput;
    likes?: LikeOrderByRelationAggregateInput;
    activities?: ActivityOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      username?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      displayName?: StringNullableFilter<'User'> | string | null;
      avatar?: StringNullableFilter<'User'> | string | null;
      bio?: StringNullableFilter<'User'> | string | null;
      password?: StringFilter<'User'> | string;
      verified?: BoolFilter<'User'> | boolean;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
      movieLists?: MovieListListRelationFilter;
      reviews?: ReviewListRelationFilter;
      followers?: FollowListRelationFilter;
      following?: FollowListRelationFilter;
      likes?: LikeListRelationFilter;
      activities?: ActivityListRelationFilter;
    },
    'id' | 'email' | 'username'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    username?: SortOrder;
    displayName?: SortOrderInput | SortOrder;
    avatar?: SortOrderInput | SortOrder;
    bio?: SortOrderInput | SortOrder;
    password?: SortOrder;
    verified?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    username?: StringWithAggregatesFilter<'User'> | string;
    displayName?: StringNullableWithAggregatesFilter<'User'> | string | null;
    avatar?: StringNullableWithAggregatesFilter<'User'> | string | null;
    bio?: StringNullableWithAggregatesFilter<'User'> | string | null;
    password?: StringWithAggregatesFilter<'User'> | string;
    verified?: BoolWithAggregatesFilter<'User'> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type MovieWhereInput = {
    AND?: MovieWhereInput | MovieWhereInput[];
    OR?: MovieWhereInput[];
    NOT?: MovieWhereInput | MovieWhereInput[];
    id?: UuidFilter<'Movie'> | string;
    tmdbId?: IntFilter<'Movie'> | number;
    title?: StringFilter<'Movie'> | string;
    overview?: StringNullableFilter<'Movie'> | string | null;
    releaseDate?: DateTimeNullableFilter<'Movie'> | Date | string | null;
    runtime?: IntNullableFilter<'Movie'> | number | null;
    posterPath?: StringNullableFilter<'Movie'> | string | null;
    backdropPath?: StringNullableFilter<'Movie'> | string | null;
    voteAverage?: FloatNullableFilter<'Movie'> | number | null;
    genres?: StringNullableListFilter<'Movie'>;
    createdAt?: DateTimeFilter<'Movie'> | Date | string;
    updatedAt?: DateTimeFilter<'Movie'> | Date | string;
    movieListItems?: MovieListItemListRelationFilter;
    reviews?: ReviewListRelationFilter;
    likes?: LikeListRelationFilter;
  };

  export type MovieOrderByWithRelationInput = {
    id?: SortOrder;
    tmdbId?: SortOrder;
    title?: SortOrder;
    overview?: SortOrderInput | SortOrder;
    releaseDate?: SortOrderInput | SortOrder;
    runtime?: SortOrderInput | SortOrder;
    posterPath?: SortOrderInput | SortOrder;
    backdropPath?: SortOrderInput | SortOrder;
    voteAverage?: SortOrderInput | SortOrder;
    genres?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    movieListItems?: MovieListItemOrderByRelationAggregateInput;
    reviews?: ReviewOrderByRelationAggregateInput;
    likes?: LikeOrderByRelationAggregateInput;
  };

  export type MovieWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      tmdbId?: number;
      AND?: MovieWhereInput | MovieWhereInput[];
      OR?: MovieWhereInput[];
      NOT?: MovieWhereInput | MovieWhereInput[];
      title?: StringFilter<'Movie'> | string;
      overview?: StringNullableFilter<'Movie'> | string | null;
      releaseDate?: DateTimeNullableFilter<'Movie'> | Date | string | null;
      runtime?: IntNullableFilter<'Movie'> | number | null;
      posterPath?: StringNullableFilter<'Movie'> | string | null;
      backdropPath?: StringNullableFilter<'Movie'> | string | null;
      voteAverage?: FloatNullableFilter<'Movie'> | number | null;
      genres?: StringNullableListFilter<'Movie'>;
      createdAt?: DateTimeFilter<'Movie'> | Date | string;
      updatedAt?: DateTimeFilter<'Movie'> | Date | string;
      movieListItems?: MovieListItemListRelationFilter;
      reviews?: ReviewListRelationFilter;
      likes?: LikeListRelationFilter;
    },
    'id' | 'tmdbId'
  >;

  export type MovieOrderByWithAggregationInput = {
    id?: SortOrder;
    tmdbId?: SortOrder;
    title?: SortOrder;
    overview?: SortOrderInput | SortOrder;
    releaseDate?: SortOrderInput | SortOrder;
    runtime?: SortOrderInput | SortOrder;
    posterPath?: SortOrderInput | SortOrder;
    backdropPath?: SortOrderInput | SortOrder;
    voteAverage?: SortOrderInput | SortOrder;
    genres?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: MovieCountOrderByAggregateInput;
    _avg?: MovieAvgOrderByAggregateInput;
    _max?: MovieMaxOrderByAggregateInput;
    _min?: MovieMinOrderByAggregateInput;
    _sum?: MovieSumOrderByAggregateInput;
  };

  export type MovieScalarWhereWithAggregatesInput = {
    AND?:
      | MovieScalarWhereWithAggregatesInput
      | MovieScalarWhereWithAggregatesInput[];
    OR?: MovieScalarWhereWithAggregatesInput[];
    NOT?:
      | MovieScalarWhereWithAggregatesInput
      | MovieScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'Movie'> | string;
    tmdbId?: IntWithAggregatesFilter<'Movie'> | number;
    title?: StringWithAggregatesFilter<'Movie'> | string;
    overview?: StringNullableWithAggregatesFilter<'Movie'> | string | null;
    releaseDate?:
      | DateTimeNullableWithAggregatesFilter<'Movie'>
      | Date
      | string
      | null;
    runtime?: IntNullableWithAggregatesFilter<'Movie'> | number | null;
    posterPath?: StringNullableWithAggregatesFilter<'Movie'> | string | null;
    backdropPath?: StringNullableWithAggregatesFilter<'Movie'> | string | null;
    voteAverage?: FloatNullableWithAggregatesFilter<'Movie'> | number | null;
    genres?: StringNullableListFilter<'Movie'>;
    createdAt?: DateTimeWithAggregatesFilter<'Movie'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Movie'> | Date | string;
  };

  export type MovieListWhereInput = {
    AND?: MovieListWhereInput | MovieListWhereInput[];
    OR?: MovieListWhereInput[];
    NOT?: MovieListWhereInput | MovieListWhereInput[];
    id?: UuidFilter<'MovieList'> | string;
    name?: StringFilter<'MovieList'> | string;
    description?: StringNullableFilter<'MovieList'> | string | null;
    type?: EnumMovieListTypeFilter<'MovieList'> | $Enums.MovieListType;
    privacy?: EnumPrivacyLevelFilter<'MovieList'> | $Enums.PrivacyLevel;
    userId?: UuidFilter<'MovieList'> | string;
    createdAt?: DateTimeFilter<'MovieList'> | Date | string;
    updatedAt?: DateTimeFilter<'MovieList'> | Date | string;
    user?: XOR<UserRelationFilter, UserWhereInput>;
    items?: MovieListItemListRelationFilter;
  };

  export type MovieListOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    type?: SortOrder;
    privacy?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    items?: MovieListItemOrderByRelationAggregateInput;
  };

  export type MovieListWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: MovieListWhereInput | MovieListWhereInput[];
      OR?: MovieListWhereInput[];
      NOT?: MovieListWhereInput | MovieListWhereInput[];
      name?: StringFilter<'MovieList'> | string;
      description?: StringNullableFilter<'MovieList'> | string | null;
      type?: EnumMovieListTypeFilter<'MovieList'> | $Enums.MovieListType;
      privacy?: EnumPrivacyLevelFilter<'MovieList'> | $Enums.PrivacyLevel;
      userId?: UuidFilter<'MovieList'> | string;
      createdAt?: DateTimeFilter<'MovieList'> | Date | string;
      updatedAt?: DateTimeFilter<'MovieList'> | Date | string;
      user?: XOR<UserRelationFilter, UserWhereInput>;
      items?: MovieListItemListRelationFilter;
    },
    'id'
  >;

  export type MovieListOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    type?: SortOrder;
    privacy?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: MovieListCountOrderByAggregateInput;
    _max?: MovieListMaxOrderByAggregateInput;
    _min?: MovieListMinOrderByAggregateInput;
  };

  export type MovieListScalarWhereWithAggregatesInput = {
    AND?:
      | MovieListScalarWhereWithAggregatesInput
      | MovieListScalarWhereWithAggregatesInput[];
    OR?: MovieListScalarWhereWithAggregatesInput[];
    NOT?:
      | MovieListScalarWhereWithAggregatesInput
      | MovieListScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'MovieList'> | string;
    name?: StringWithAggregatesFilter<'MovieList'> | string;
    description?:
      | StringNullableWithAggregatesFilter<'MovieList'>
      | string
      | null;
    type?:
      | EnumMovieListTypeWithAggregatesFilter<'MovieList'>
      | $Enums.MovieListType;
    privacy?:
      | EnumPrivacyLevelWithAggregatesFilter<'MovieList'>
      | $Enums.PrivacyLevel;
    userId?: UuidWithAggregatesFilter<'MovieList'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'MovieList'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'MovieList'> | Date | string;
  };

  export type MovieListItemWhereInput = {
    AND?: MovieListItemWhereInput | MovieListItemWhereInput[];
    OR?: MovieListItemWhereInput[];
    NOT?: MovieListItemWhereInput | MovieListItemWhereInput[];
    id?: UuidFilter<'MovieListItem'> | string;
    movieListId?: UuidFilter<'MovieListItem'> | string;
    movieId?: UuidFilter<'MovieListItem'> | string;
    notes?: StringNullableFilter<'MovieListItem'> | string | null;
    rating?: IntNullableFilter<'MovieListItem'> | number | null;
    watchedAt?: DateTimeNullableFilter<'MovieListItem'> | Date | string | null;
    addedAt?: DateTimeFilter<'MovieListItem'> | Date | string;
    movieList?: XOR<MovieListRelationFilter, MovieListWhereInput>;
    movie?: XOR<MovieRelationFilter, MovieWhereInput>;
  };

  export type MovieListItemOrderByWithRelationInput = {
    id?: SortOrder;
    movieListId?: SortOrder;
    movieId?: SortOrder;
    notes?: SortOrderInput | SortOrder;
    rating?: SortOrderInput | SortOrder;
    watchedAt?: SortOrderInput | SortOrder;
    addedAt?: SortOrder;
    movieList?: MovieListOrderByWithRelationInput;
    movie?: MovieOrderByWithRelationInput;
  };

  export type MovieListItemWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      movieListId_movieId?: MovieListItemMovieListIdMovieIdCompoundUniqueInput;
      AND?: MovieListItemWhereInput | MovieListItemWhereInput[];
      OR?: MovieListItemWhereInput[];
      NOT?: MovieListItemWhereInput | MovieListItemWhereInput[];
      movieListId?: UuidFilter<'MovieListItem'> | string;
      movieId?: UuidFilter<'MovieListItem'> | string;
      notes?: StringNullableFilter<'MovieListItem'> | string | null;
      rating?: IntNullableFilter<'MovieListItem'> | number | null;
      watchedAt?:
        | DateTimeNullableFilter<'MovieListItem'>
        | Date
        | string
        | null;
      addedAt?: DateTimeFilter<'MovieListItem'> | Date | string;
      movieList?: XOR<MovieListRelationFilter, MovieListWhereInput>;
      movie?: XOR<MovieRelationFilter, MovieWhereInput>;
    },
    'id' | 'movieListId_movieId'
  >;

  export type MovieListItemOrderByWithAggregationInput = {
    id?: SortOrder;
    movieListId?: SortOrder;
    movieId?: SortOrder;
    notes?: SortOrderInput | SortOrder;
    rating?: SortOrderInput | SortOrder;
    watchedAt?: SortOrderInput | SortOrder;
    addedAt?: SortOrder;
    _count?: MovieListItemCountOrderByAggregateInput;
    _avg?: MovieListItemAvgOrderByAggregateInput;
    _max?: MovieListItemMaxOrderByAggregateInput;
    _min?: MovieListItemMinOrderByAggregateInput;
    _sum?: MovieListItemSumOrderByAggregateInput;
  };

  export type MovieListItemScalarWhereWithAggregatesInput = {
    AND?:
      | MovieListItemScalarWhereWithAggregatesInput
      | MovieListItemScalarWhereWithAggregatesInput[];
    OR?: MovieListItemScalarWhereWithAggregatesInput[];
    NOT?:
      | MovieListItemScalarWhereWithAggregatesInput
      | MovieListItemScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'MovieListItem'> | string;
    movieListId?: UuidWithAggregatesFilter<'MovieListItem'> | string;
    movieId?: UuidWithAggregatesFilter<'MovieListItem'> | string;
    notes?: StringNullableWithAggregatesFilter<'MovieListItem'> | string | null;
    rating?: IntNullableWithAggregatesFilter<'MovieListItem'> | number | null;
    watchedAt?:
      | DateTimeNullableWithAggregatesFilter<'MovieListItem'>
      | Date
      | string
      | null;
    addedAt?: DateTimeWithAggregatesFilter<'MovieListItem'> | Date | string;
  };

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[];
    OR?: ReviewWhereInput[];
    NOT?: ReviewWhereInput | ReviewWhereInput[];
    id?: UuidFilter<'Review'> | string;
    content?: StringFilter<'Review'> | string;
    rating?: IntFilter<'Review'> | number;
    movieId?: UuidFilter<'Review'> | string;
    userId?: UuidFilter<'Review'> | string;
    createdAt?: DateTimeFilter<'Review'> | Date | string;
    updatedAt?: DateTimeFilter<'Review'> | Date | string;
    movie?: XOR<MovieRelationFilter, MovieWhereInput>;
    user?: XOR<UserRelationFilter, UserWhereInput>;
    likes?: LikeListRelationFilter;
  };

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder;
    content?: SortOrder;
    rating?: SortOrder;
    movieId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    movie?: MovieOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
    likes?: LikeOrderByRelationAggregateInput;
  };

  export type ReviewWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      movieId_userId?: ReviewMovieIdUserIdCompoundUniqueInput;
      AND?: ReviewWhereInput | ReviewWhereInput[];
      OR?: ReviewWhereInput[];
      NOT?: ReviewWhereInput | ReviewWhereInput[];
      content?: StringFilter<'Review'> | string;
      rating?: IntFilter<'Review'> | number;
      movieId?: UuidFilter<'Review'> | string;
      userId?: UuidFilter<'Review'> | string;
      createdAt?: DateTimeFilter<'Review'> | Date | string;
      updatedAt?: DateTimeFilter<'Review'> | Date | string;
      movie?: XOR<MovieRelationFilter, MovieWhereInput>;
      user?: XOR<UserRelationFilter, UserWhereInput>;
      likes?: LikeListRelationFilter;
    },
    'id' | 'movieId_userId'
  >;

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder;
    content?: SortOrder;
    rating?: SortOrder;
    movieId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ReviewCountOrderByAggregateInput;
    _avg?: ReviewAvgOrderByAggregateInput;
    _max?: ReviewMaxOrderByAggregateInput;
    _min?: ReviewMinOrderByAggregateInput;
    _sum?: ReviewSumOrderByAggregateInput;
  };

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?:
      | ReviewScalarWhereWithAggregatesInput
      | ReviewScalarWhereWithAggregatesInput[];
    OR?: ReviewScalarWhereWithAggregatesInput[];
    NOT?:
      | ReviewScalarWhereWithAggregatesInput
      | ReviewScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'Review'> | string;
    content?: StringWithAggregatesFilter<'Review'> | string;
    rating?: IntWithAggregatesFilter<'Review'> | number;
    movieId?: UuidWithAggregatesFilter<'Review'> | string;
    userId?: UuidWithAggregatesFilter<'Review'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Review'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Review'> | Date | string;
  };

  export type FollowWhereInput = {
    AND?: FollowWhereInput | FollowWhereInput[];
    OR?: FollowWhereInput[];
    NOT?: FollowWhereInput | FollowWhereInput[];
    id?: UuidFilter<'Follow'> | string;
    followerId?: UuidFilter<'Follow'> | string;
    followingId?: UuidFilter<'Follow'> | string;
    createdAt?: DateTimeFilter<'Follow'> | Date | string;
    follower?: XOR<UserRelationFilter, UserWhereInput>;
    following?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type FollowOrderByWithRelationInput = {
    id?: SortOrder;
    followerId?: SortOrder;
    followingId?: SortOrder;
    createdAt?: SortOrder;
    follower?: UserOrderByWithRelationInput;
    following?: UserOrderByWithRelationInput;
  };

  export type FollowWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      followerId_followingId?: FollowFollowerIdFollowingIdCompoundUniqueInput;
      AND?: FollowWhereInput | FollowWhereInput[];
      OR?: FollowWhereInput[];
      NOT?: FollowWhereInput | FollowWhereInput[];
      followerId?: UuidFilter<'Follow'> | string;
      followingId?: UuidFilter<'Follow'> | string;
      createdAt?: DateTimeFilter<'Follow'> | Date | string;
      follower?: XOR<UserRelationFilter, UserWhereInput>;
      following?: XOR<UserRelationFilter, UserWhereInput>;
    },
    'id' | 'followerId_followingId'
  >;

  export type FollowOrderByWithAggregationInput = {
    id?: SortOrder;
    followerId?: SortOrder;
    followingId?: SortOrder;
    createdAt?: SortOrder;
    _count?: FollowCountOrderByAggregateInput;
    _max?: FollowMaxOrderByAggregateInput;
    _min?: FollowMinOrderByAggregateInput;
  };

  export type FollowScalarWhereWithAggregatesInput = {
    AND?:
      | FollowScalarWhereWithAggregatesInput
      | FollowScalarWhereWithAggregatesInput[];
    OR?: FollowScalarWhereWithAggregatesInput[];
    NOT?:
      | FollowScalarWhereWithAggregatesInput
      | FollowScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'Follow'> | string;
    followerId?: UuidWithAggregatesFilter<'Follow'> | string;
    followingId?: UuidWithAggregatesFilter<'Follow'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Follow'> | Date | string;
  };

  export type LikeWhereInput = {
    AND?: LikeWhereInput | LikeWhereInput[];
    OR?: LikeWhereInput[];
    NOT?: LikeWhereInput | LikeWhereInput[];
    id?: UuidFilter<'Like'> | string;
    userId?: UuidFilter<'Like'> | string;
    movieId?: UuidNullableFilter<'Like'> | string | null;
    reviewId?: UuidNullableFilter<'Like'> | string | null;
    createdAt?: DateTimeFilter<'Like'> | Date | string;
    user?: XOR<UserRelationFilter, UserWhereInput>;
    movie?: XOR<MovieNullableRelationFilter, MovieWhereInput> | null;
    review?: XOR<ReviewNullableRelationFilter, ReviewWhereInput> | null;
  };

  export type LikeOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    movieId?: SortOrderInput | SortOrder;
    reviewId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    movie?: MovieOrderByWithRelationInput;
    review?: ReviewOrderByWithRelationInput;
  };

  export type LikeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId_movieId?: LikeUserIdMovieIdCompoundUniqueInput;
      userId_reviewId?: LikeUserIdReviewIdCompoundUniqueInput;
      AND?: LikeWhereInput | LikeWhereInput[];
      OR?: LikeWhereInput[];
      NOT?: LikeWhereInput | LikeWhereInput[];
      userId?: UuidFilter<'Like'> | string;
      movieId?: UuidNullableFilter<'Like'> | string | null;
      reviewId?: UuidNullableFilter<'Like'> | string | null;
      createdAt?: DateTimeFilter<'Like'> | Date | string;
      user?: XOR<UserRelationFilter, UserWhereInput>;
      movie?: XOR<MovieNullableRelationFilter, MovieWhereInput> | null;
      review?: XOR<ReviewNullableRelationFilter, ReviewWhereInput> | null;
    },
    'id' | 'userId_movieId' | 'userId_reviewId'
  >;

  export type LikeOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    movieId?: SortOrderInput | SortOrder;
    reviewId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    _count?: LikeCountOrderByAggregateInput;
    _max?: LikeMaxOrderByAggregateInput;
    _min?: LikeMinOrderByAggregateInput;
  };

  export type LikeScalarWhereWithAggregatesInput = {
    AND?:
      | LikeScalarWhereWithAggregatesInput
      | LikeScalarWhereWithAggregatesInput[];
    OR?: LikeScalarWhereWithAggregatesInput[];
    NOT?:
      | LikeScalarWhereWithAggregatesInput
      | LikeScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'Like'> | string;
    userId?: UuidWithAggregatesFilter<'Like'> | string;
    movieId?: UuidNullableWithAggregatesFilter<'Like'> | string | null;
    reviewId?: UuidNullableWithAggregatesFilter<'Like'> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<'Like'> | Date | string;
  };

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[];
    OR?: ActivityWhereInput[];
    NOT?: ActivityWhereInput | ActivityWhereInput[];
    id?: UuidFilter<'Activity'> | string;
    type?: EnumActivityTypeFilter<'Activity'> | $Enums.ActivityType;
    userId?: UuidFilter<'Activity'> | string;
    data?: JsonFilter<'Activity'>;
    createdAt?: DateTimeFilter<'Activity'> | Date | string;
    user?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder;
    type?: SortOrder;
    userId?: SortOrder;
    data?: SortOrder;
    createdAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type ActivityWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ActivityWhereInput | ActivityWhereInput[];
      OR?: ActivityWhereInput[];
      NOT?: ActivityWhereInput | ActivityWhereInput[];
      type?: EnumActivityTypeFilter<'Activity'> | $Enums.ActivityType;
      userId?: UuidFilter<'Activity'> | string;
      data?: JsonFilter<'Activity'>;
      createdAt?: DateTimeFilter<'Activity'> | Date | string;
      user?: XOR<UserRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder;
    type?: SortOrder;
    userId?: SortOrder;
    data?: SortOrder;
    createdAt?: SortOrder;
    _count?: ActivityCountOrderByAggregateInput;
    _max?: ActivityMaxOrderByAggregateInput;
    _min?: ActivityMinOrderByAggregateInput;
  };

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?:
      | ActivityScalarWhereWithAggregatesInput
      | ActivityScalarWhereWithAggregatesInput[];
    OR?: ActivityScalarWhereWithAggregatesInput[];
    NOT?:
      | ActivityScalarWhereWithAggregatesInput
      | ActivityScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'Activity'> | string;
    type?:
      | EnumActivityTypeWithAggregatesFilter<'Activity'>
      | $Enums.ActivityType;
    userId?: UuidWithAggregatesFilter<'Activity'> | string;
    data?: JsonWithAggregatesFilter<'Activity'>;
    createdAt?: DateTimeWithAggregatesFilter<'Activity'> | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    username: string;
    displayName?: string | null;
    avatar?: string | null;
    bio?: string | null;
    password: string;
    verified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movieLists?: MovieListCreateNestedManyWithoutUserInput;
    reviews?: ReviewCreateNestedManyWithoutUserInput;
    followers?: FollowCreateNestedManyWithoutFollowerInput;
    following?: FollowCreateNestedManyWithoutFollowingInput;
    likes?: LikeCreateNestedManyWithoutUserInput;
    activities?: ActivityCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    username: string;
    displayName?: string | null;
    avatar?: string | null;
    bio?: string | null;
    password: string;
    verified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movieLists?: MovieListUncheckedCreateNestedManyWithoutUserInput;
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput;
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput;
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput;
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput;
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movieLists?: MovieListUpdateManyWithoutUserNestedInput;
    reviews?: ReviewUpdateManyWithoutUserNestedInput;
    followers?: FollowUpdateManyWithoutFollowerNestedInput;
    following?: FollowUpdateManyWithoutFollowingNestedInput;
    likes?: LikeUpdateManyWithoutUserNestedInput;
    activities?: ActivityUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movieLists?: MovieListUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput;
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput;
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    username: string;
    displayName?: string | null;
    avatar?: string | null;
    bio?: string | null;
    password: string;
    verified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MovieCreateInput = {
    id?: string;
    tmdbId: number;
    title: string;
    overview?: string | null;
    releaseDate?: Date | string | null;
    runtime?: number | null;
    posterPath?: string | null;
    backdropPath?: string | null;
    voteAverage?: number | null;
    genres?: MovieCreategenresInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movieListItems?: MovieListItemCreateNestedManyWithoutMovieInput;
    reviews?: ReviewCreateNestedManyWithoutMovieInput;
    likes?: LikeCreateNestedManyWithoutMovieInput;
  };

  export type MovieUncheckedCreateInput = {
    id?: string;
    tmdbId: number;
    title: string;
    overview?: string | null;
    releaseDate?: Date | string | null;
    runtime?: number | null;
    posterPath?: string | null;
    backdropPath?: string | null;
    voteAverage?: number | null;
    genres?: MovieCreategenresInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movieListItems?: MovieListItemUncheckedCreateNestedManyWithoutMovieInput;
    reviews?: ReviewUncheckedCreateNestedManyWithoutMovieInput;
    likes?: LikeUncheckedCreateNestedManyWithoutMovieInput;
  };

  export type MovieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tmdbId?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    overview?: NullableStringFieldUpdateOperationsInput | string | null;
    releaseDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    runtime?: NullableIntFieldUpdateOperationsInput | number | null;
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null;
    backdropPath?: NullableStringFieldUpdateOperationsInput | string | null;
    voteAverage?: NullableFloatFieldUpdateOperationsInput | number | null;
    genres?: MovieUpdategenresInput | string[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movieListItems?: MovieListItemUpdateManyWithoutMovieNestedInput;
    reviews?: ReviewUpdateManyWithoutMovieNestedInput;
    likes?: LikeUpdateManyWithoutMovieNestedInput;
  };

  export type MovieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tmdbId?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    overview?: NullableStringFieldUpdateOperationsInput | string | null;
    releaseDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    runtime?: NullableIntFieldUpdateOperationsInput | number | null;
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null;
    backdropPath?: NullableStringFieldUpdateOperationsInput | string | null;
    voteAverage?: NullableFloatFieldUpdateOperationsInput | number | null;
    genres?: MovieUpdategenresInput | string[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movieListItems?: MovieListItemUncheckedUpdateManyWithoutMovieNestedInput;
    reviews?: ReviewUncheckedUpdateManyWithoutMovieNestedInput;
    likes?: LikeUncheckedUpdateManyWithoutMovieNestedInput;
  };

  export type MovieCreateManyInput = {
    id?: string;
    tmdbId: number;
    title: string;
    overview?: string | null;
    releaseDate?: Date | string | null;
    runtime?: number | null;
    posterPath?: string | null;
    backdropPath?: string | null;
    voteAverage?: number | null;
    genres?: MovieCreategenresInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MovieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tmdbId?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    overview?: NullableStringFieldUpdateOperationsInput | string | null;
    releaseDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    runtime?: NullableIntFieldUpdateOperationsInput | number | null;
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null;
    backdropPath?: NullableStringFieldUpdateOperationsInput | string | null;
    voteAverage?: NullableFloatFieldUpdateOperationsInput | number | null;
    genres?: MovieUpdategenresInput | string[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MovieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tmdbId?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    overview?: NullableStringFieldUpdateOperationsInput | string | null;
    releaseDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    runtime?: NullableIntFieldUpdateOperationsInput | number | null;
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null;
    backdropPath?: NullableStringFieldUpdateOperationsInput | string | null;
    voteAverage?: NullableFloatFieldUpdateOperationsInput | number | null;
    genres?: MovieUpdategenresInput | string[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MovieListCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    type: $Enums.MovieListType;
    privacy?: $Enums.PrivacyLevel;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutMovieListsInput;
    items?: MovieListItemCreateNestedManyWithoutMovieListInput;
  };

  export type MovieListUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    type: $Enums.MovieListType;
    privacy?: $Enums.PrivacyLevel;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: MovieListItemUncheckedCreateNestedManyWithoutMovieListInput;
  };

  export type MovieListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumMovieListTypeFieldUpdateOperationsInput | $Enums.MovieListType;
    privacy?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutMovieListsNestedInput;
    items?: MovieListItemUpdateManyWithoutMovieListNestedInput;
  };

  export type MovieListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumMovieListTypeFieldUpdateOperationsInput | $Enums.MovieListType;
    privacy?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    items?: MovieListItemUncheckedUpdateManyWithoutMovieListNestedInput;
  };

  export type MovieListCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    type: $Enums.MovieListType;
    privacy?: $Enums.PrivacyLevel;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MovieListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumMovieListTypeFieldUpdateOperationsInput | $Enums.MovieListType;
    privacy?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MovieListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumMovieListTypeFieldUpdateOperationsInput | $Enums.MovieListType;
    privacy?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MovieListItemCreateInput = {
    id?: string;
    notes?: string | null;
    rating?: number | null;
    watchedAt?: Date | string | null;
    addedAt?: Date | string;
    movieList: MovieListCreateNestedOneWithoutItemsInput;
    movie: MovieCreateNestedOneWithoutMovieListItemsInput;
  };

  export type MovieListItemUncheckedCreateInput = {
    id?: string;
    movieListId: string;
    movieId: string;
    notes?: string | null;
    rating?: number | null;
    watchedAt?: Date | string | null;
    addedAt?: Date | string;
  };

  export type MovieListItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    watchedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movieList?: MovieListUpdateOneRequiredWithoutItemsNestedInput;
    movie?: MovieUpdateOneRequiredWithoutMovieListItemsNestedInput;
  };

  export type MovieListItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    movieListId?: StringFieldUpdateOperationsInput | string;
    movieId?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    watchedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MovieListItemCreateManyInput = {
    id?: string;
    movieListId: string;
    movieId: string;
    notes?: string | null;
    rating?: number | null;
    watchedAt?: Date | string | null;
    addedAt?: Date | string;
  };

  export type MovieListItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    watchedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MovieListItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    movieListId?: StringFieldUpdateOperationsInput | string;
    movieId?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    watchedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewCreateInput = {
    id?: string;
    content: string;
    rating: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movie: MovieCreateNestedOneWithoutReviewsInput;
    user: UserCreateNestedOneWithoutReviewsInput;
    likes?: LikeCreateNestedManyWithoutReviewInput;
  };

  export type ReviewUncheckedCreateInput = {
    id?: string;
    content: string;
    rating: number;
    movieId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    likes?: LikeUncheckedCreateNestedManyWithoutReviewInput;
  };

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie?: MovieUpdateOneRequiredWithoutReviewsNestedInput;
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput;
    likes?: LikeUpdateManyWithoutReviewNestedInput;
  };

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    movieId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    likes?: LikeUncheckedUpdateManyWithoutReviewNestedInput;
  };

  export type ReviewCreateManyInput = {
    id?: string;
    content: string;
    rating: number;
    movieId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    movieId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FollowCreateInput = {
    id?: string;
    createdAt?: Date | string;
    follower: UserCreateNestedOneWithoutFollowersInput;
    following: UserCreateNestedOneWithoutFollowingInput;
  };

  export type FollowUncheckedCreateInput = {
    id?: string;
    followerId: string;
    followingId: string;
    createdAt?: Date | string;
  };

  export type FollowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    follower?: UserUpdateOneRequiredWithoutFollowersNestedInput;
    following?: UserUpdateOneRequiredWithoutFollowingNestedInput;
  };

  export type FollowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    followerId?: StringFieldUpdateOperationsInput | string;
    followingId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FollowCreateManyInput = {
    id?: string;
    followerId: string;
    followingId: string;
    createdAt?: Date | string;
  };

  export type FollowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FollowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    followerId?: StringFieldUpdateOperationsInput | string;
    followingId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LikeCreateInput = {
    id?: string;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutLikesInput;
    movie?: MovieCreateNestedOneWithoutLikesInput;
    review?: ReviewCreateNestedOneWithoutLikesInput;
  };

  export type LikeUncheckedCreateInput = {
    id?: string;
    userId: string;
    movieId?: string | null;
    reviewId?: string | null;
    createdAt?: Date | string;
  };

  export type LikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutLikesNestedInput;
    movie?: MovieUpdateOneWithoutLikesNestedInput;
    review?: ReviewUpdateOneWithoutLikesNestedInput;
  };

  export type LikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    movieId?: NullableStringFieldUpdateOperationsInput | string | null;
    reviewId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LikeCreateManyInput = {
    id?: string;
    userId: string;
    movieId?: string | null;
    reviewId?: string | null;
    createdAt?: Date | string;
  };

  export type LikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    movieId?: NullableStringFieldUpdateOperationsInput | string | null;
    reviewId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ActivityCreateInput = {
    id?: string;
    type: $Enums.ActivityType;
    data: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutActivitiesInput;
  };

  export type ActivityUncheckedCreateInput = {
    id?: string;
    type: $Enums.ActivityType;
    userId: string;
    data: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
  };

  export type ActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    data?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutActivitiesNestedInput;
  };

  export type ActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    userId?: StringFieldUpdateOperationsInput | string;
    data?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ActivityCreateManyInput = {
    id?: string;
    type: $Enums.ActivityType;
    userId: string;
    data: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
  };

  export type ActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    data?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    userId?: StringFieldUpdateOperationsInput | string;
    data?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type MovieListListRelationFilter = {
    every?: MovieListWhereInput;
    some?: MovieListWhereInput;
    none?: MovieListWhereInput;
  };

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput;
    some?: ReviewWhereInput;
    none?: ReviewWhereInput;
  };

  export type FollowListRelationFilter = {
    every?: FollowWhereInput;
    some?: FollowWhereInput;
    none?: FollowWhereInput;
  };

  export type LikeListRelationFilter = {
    every?: LikeWhereInput;
    some?: LikeWhereInput;
    none?: LikeWhereInput;
  };

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput;
    some?: ActivityWhereInput;
    none?: ActivityWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type MovieListOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type FollowOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    username?: SortOrder;
    displayName?: SortOrder;
    avatar?: SortOrder;
    bio?: SortOrder;
    password?: SortOrder;
    verified?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    username?: SortOrder;
    displayName?: SortOrder;
    avatar?: SortOrder;
    bio?: SortOrder;
    password?: SortOrder;
    verified?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    username?: SortOrder;
    displayName?: SortOrder;
    avatar?: SortOrder;
    bio?: SortOrder;
    password?: SortOrder;
    verified?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type MovieListItemListRelationFilter = {
    every?: MovieListItemWhereInput;
    some?: MovieListItemWhereInput;
    none?: MovieListItemWhereInput;
  };

  export type MovieListItemOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type MovieCountOrderByAggregateInput = {
    id?: SortOrder;
    tmdbId?: SortOrder;
    title?: SortOrder;
    overview?: SortOrder;
    releaseDate?: SortOrder;
    runtime?: SortOrder;
    posterPath?: SortOrder;
    backdropPath?: SortOrder;
    voteAverage?: SortOrder;
    genres?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MovieAvgOrderByAggregateInput = {
    tmdbId?: SortOrder;
    runtime?: SortOrder;
    voteAverage?: SortOrder;
  };

  export type MovieMaxOrderByAggregateInput = {
    id?: SortOrder;
    tmdbId?: SortOrder;
    title?: SortOrder;
    overview?: SortOrder;
    releaseDate?: SortOrder;
    runtime?: SortOrder;
    posterPath?: SortOrder;
    backdropPath?: SortOrder;
    voteAverage?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MovieMinOrderByAggregateInput = {
    id?: SortOrder;
    tmdbId?: SortOrder;
    title?: SortOrder;
    overview?: SortOrder;
    releaseDate?: SortOrder;
    runtime?: SortOrder;
    posterPath?: SortOrder;
    backdropPath?: SortOrder;
    voteAverage?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MovieSumOrderByAggregateInput = {
    tmdbId?: SortOrder;
    runtime?: SortOrder;
    voteAverage?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type EnumMovieListTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.MovieListType
      | EnumMovieListTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.MovieListType[]
      | ListEnumMovieListTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.MovieListType[]
      | ListEnumMovieListTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumMovieListTypeFilter<$PrismaModel> | $Enums.MovieListType;
  };

  export type EnumPrivacyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.PrivacyLevel | EnumPrivacyLevelFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.PrivacyLevel[]
      | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.PrivacyLevel[]
      | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>;
    not?: NestedEnumPrivacyLevelFilter<$PrismaModel> | $Enums.PrivacyLevel;
  };

  export type UserRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type MovieListCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    type?: SortOrder;
    privacy?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MovieListMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    type?: SortOrder;
    privacy?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MovieListMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    type?: SortOrder;
    privacy?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumMovieListTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.MovieListType
      | EnumMovieListTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.MovieListType[]
      | ListEnumMovieListTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.MovieListType[]
      | ListEnumMovieListTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumMovieListTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.MovieListType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumMovieListTypeFilter<$PrismaModel>;
    _max?: NestedEnumMovieListTypeFilter<$PrismaModel>;
  };

  export type EnumPrivacyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrivacyLevel | EnumPrivacyLevelFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.PrivacyLevel[]
      | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.PrivacyLevel[]
      | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumPrivacyLevelWithAggregatesFilter<$PrismaModel>
      | $Enums.PrivacyLevel;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPrivacyLevelFilter<$PrismaModel>;
    _max?: NestedEnumPrivacyLevelFilter<$PrismaModel>;
  };

  export type MovieListRelationFilter = {
    is?: MovieListWhereInput;
    isNot?: MovieListWhereInput;
  };

  export type MovieRelationFilter = {
    is?: MovieWhereInput;
    isNot?: MovieWhereInput;
  };

  export type MovieListItemMovieListIdMovieIdCompoundUniqueInput = {
    movieListId: string;
    movieId: string;
  };

  export type MovieListItemCountOrderByAggregateInput = {
    id?: SortOrder;
    movieListId?: SortOrder;
    movieId?: SortOrder;
    notes?: SortOrder;
    rating?: SortOrder;
    watchedAt?: SortOrder;
    addedAt?: SortOrder;
  };

  export type MovieListItemAvgOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type MovieListItemMaxOrderByAggregateInput = {
    id?: SortOrder;
    movieListId?: SortOrder;
    movieId?: SortOrder;
    notes?: SortOrder;
    rating?: SortOrder;
    watchedAt?: SortOrder;
    addedAt?: SortOrder;
  };

  export type MovieListItemMinOrderByAggregateInput = {
    id?: SortOrder;
    movieListId?: SortOrder;
    movieId?: SortOrder;
    notes?: SortOrder;
    rating?: SortOrder;
    watchedAt?: SortOrder;
    addedAt?: SortOrder;
  };

  export type MovieListItemSumOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type ReviewMovieIdUserIdCompoundUniqueInput = {
    movieId: string;
    userId: string;
  };

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    rating?: SortOrder;
    movieId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    rating?: SortOrder;
    movieId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    rating?: SortOrder;
    movieId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type FollowFollowerIdFollowingIdCompoundUniqueInput = {
    followerId: string;
    followingId: string;
  };

  export type FollowCountOrderByAggregateInput = {
    id?: SortOrder;
    followerId?: SortOrder;
    followingId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type FollowMaxOrderByAggregateInput = {
    id?: SortOrder;
    followerId?: SortOrder;
    followingId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type FollowMinOrderByAggregateInput = {
    id?: SortOrder;
    followerId?: SortOrder;
    followingId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type MovieNullableRelationFilter = {
    is?: MovieWhereInput | null;
    isNot?: MovieWhereInput | null;
  };

  export type ReviewNullableRelationFilter = {
    is?: ReviewWhereInput | null;
    isNot?: ReviewWhereInput | null;
  };

  export type LikeUserIdMovieIdCompoundUniqueInput = {
    userId: string;
    movieId: string;
  };

  export type LikeUserIdReviewIdCompoundUniqueInput = {
    userId: string;
    reviewId: string;
  };

  export type LikeCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    movieId?: SortOrder;
    reviewId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type LikeMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    movieId?: SortOrder;
    reviewId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type LikeMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    movieId?: SortOrder;
    reviewId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type EnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ActivityType[]
      | ListEnumActivityTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ActivityType[]
      | ListEnumActivityTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType;
  };
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder;
    type?: SortOrder;
    userId?: SortOrder;
    data?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder;
    type?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder;
    type?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type EnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ActivityType[]
      | ListEnumActivityTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ActivityType[]
      | ListEnumActivityTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.ActivityType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>;
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>;
  };
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
            'path'
          >
        >,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>
      >;

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedJsonFilter<$PrismaModel>;
    _max?: NestedJsonFilter<$PrismaModel>;
  };

  export type MovieListCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          MovieListCreateWithoutUserInput,
          MovieListUncheckedCreateWithoutUserInput
        >
      | MovieListCreateWithoutUserInput[]
      | MovieListUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | MovieListCreateOrConnectWithoutUserInput
      | MovieListCreateOrConnectWithoutUserInput[];
    createMany?: MovieListCreateManyUserInputEnvelope;
    connect?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[];
  };

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
      | ReviewCreateWithoutUserInput[]
      | ReviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutUserInput
      | ReviewCreateOrConnectWithoutUserInput[];
    createMany?: ReviewCreateManyUserInputEnvelope;
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
  };

  export type FollowCreateNestedManyWithoutFollowerInput = {
    create?:
      | XOR<
          FollowCreateWithoutFollowerInput,
          FollowUncheckedCreateWithoutFollowerInput
        >
      | FollowCreateWithoutFollowerInput[]
      | FollowUncheckedCreateWithoutFollowerInput[];
    connectOrCreate?:
      | FollowCreateOrConnectWithoutFollowerInput
      | FollowCreateOrConnectWithoutFollowerInput[];
    createMany?: FollowCreateManyFollowerInputEnvelope;
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
  };

  export type FollowCreateNestedManyWithoutFollowingInput = {
    create?:
      | XOR<
          FollowCreateWithoutFollowingInput,
          FollowUncheckedCreateWithoutFollowingInput
        >
      | FollowCreateWithoutFollowingInput[]
      | FollowUncheckedCreateWithoutFollowingInput[];
    connectOrCreate?:
      | FollowCreateOrConnectWithoutFollowingInput
      | FollowCreateOrConnectWithoutFollowingInput[];
    createMany?: FollowCreateManyFollowingInputEnvelope;
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
  };

  export type LikeCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
      | LikeCreateWithoutUserInput[]
      | LikeUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | LikeCreateOrConnectWithoutUserInput
      | LikeCreateOrConnectWithoutUserInput[];
    createMany?: LikeCreateManyUserInputEnvelope;
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
  };

  export type ActivityCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ActivityCreateWithoutUserInput,
          ActivityUncheckedCreateWithoutUserInput
        >
      | ActivityCreateWithoutUserInput[]
      | ActivityUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ActivityCreateOrConnectWithoutUserInput
      | ActivityCreateOrConnectWithoutUserInput[];
    createMany?: ActivityCreateManyUserInputEnvelope;
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[];
  };

  export type MovieListUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          MovieListCreateWithoutUserInput,
          MovieListUncheckedCreateWithoutUserInput
        >
      | MovieListCreateWithoutUserInput[]
      | MovieListUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | MovieListCreateOrConnectWithoutUserInput
      | MovieListCreateOrConnectWithoutUserInput[];
    createMany?: MovieListCreateManyUserInputEnvelope;
    connect?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[];
  };

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
      | ReviewCreateWithoutUserInput[]
      | ReviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutUserInput
      | ReviewCreateOrConnectWithoutUserInput[];
    createMany?: ReviewCreateManyUserInputEnvelope;
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
  };

  export type FollowUncheckedCreateNestedManyWithoutFollowerInput = {
    create?:
      | XOR<
          FollowCreateWithoutFollowerInput,
          FollowUncheckedCreateWithoutFollowerInput
        >
      | FollowCreateWithoutFollowerInput[]
      | FollowUncheckedCreateWithoutFollowerInput[];
    connectOrCreate?:
      | FollowCreateOrConnectWithoutFollowerInput
      | FollowCreateOrConnectWithoutFollowerInput[];
    createMany?: FollowCreateManyFollowerInputEnvelope;
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
  };

  export type FollowUncheckedCreateNestedManyWithoutFollowingInput = {
    create?:
      | XOR<
          FollowCreateWithoutFollowingInput,
          FollowUncheckedCreateWithoutFollowingInput
        >
      | FollowCreateWithoutFollowingInput[]
      | FollowUncheckedCreateWithoutFollowingInput[];
    connectOrCreate?:
      | FollowCreateOrConnectWithoutFollowingInput
      | FollowCreateOrConnectWithoutFollowingInput[];
    createMany?: FollowCreateManyFollowingInputEnvelope;
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
  };

  export type LikeUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
      | LikeCreateWithoutUserInput[]
      | LikeUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | LikeCreateOrConnectWithoutUserInput
      | LikeCreateOrConnectWithoutUserInput[];
    createMany?: LikeCreateManyUserInputEnvelope;
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
  };

  export type ActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ActivityCreateWithoutUserInput,
          ActivityUncheckedCreateWithoutUserInput
        >
      | ActivityCreateWithoutUserInput[]
      | ActivityUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ActivityCreateOrConnectWithoutUserInput
      | ActivityCreateOrConnectWithoutUserInput[];
    createMany?: ActivityCreateManyUserInputEnvelope;
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type MovieListUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          MovieListCreateWithoutUserInput,
          MovieListUncheckedCreateWithoutUserInput
        >
      | MovieListCreateWithoutUserInput[]
      | MovieListUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | MovieListCreateOrConnectWithoutUserInput
      | MovieListCreateOrConnectWithoutUserInput[];
    upsert?:
      | MovieListUpsertWithWhereUniqueWithoutUserInput
      | MovieListUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: MovieListCreateManyUserInputEnvelope;
    set?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[];
    disconnect?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[];
    delete?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[];
    connect?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[];
    update?:
      | MovieListUpdateWithWhereUniqueWithoutUserInput
      | MovieListUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | MovieListUpdateManyWithWhereWithoutUserInput
      | MovieListUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: MovieListScalarWhereInput | MovieListScalarWhereInput[];
  };

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
      | ReviewCreateWithoutUserInput[]
      | ReviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutUserInput
      | ReviewCreateOrConnectWithoutUserInput[];
    upsert?:
      | ReviewUpsertWithWhereUniqueWithoutUserInput
      | ReviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ReviewCreateManyUserInputEnvelope;
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    update?:
      | ReviewUpdateWithWhereUniqueWithoutUserInput
      | ReviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ReviewUpdateManyWithWhereWithoutUserInput
      | ReviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[];
  };

  export type FollowUpdateManyWithoutFollowerNestedInput = {
    create?:
      | XOR<
          FollowCreateWithoutFollowerInput,
          FollowUncheckedCreateWithoutFollowerInput
        >
      | FollowCreateWithoutFollowerInput[]
      | FollowUncheckedCreateWithoutFollowerInput[];
    connectOrCreate?:
      | FollowCreateOrConnectWithoutFollowerInput
      | FollowCreateOrConnectWithoutFollowerInput[];
    upsert?:
      | FollowUpsertWithWhereUniqueWithoutFollowerInput
      | FollowUpsertWithWhereUniqueWithoutFollowerInput[];
    createMany?: FollowCreateManyFollowerInputEnvelope;
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    update?:
      | FollowUpdateWithWhereUniqueWithoutFollowerInput
      | FollowUpdateWithWhereUniqueWithoutFollowerInput[];
    updateMany?:
      | FollowUpdateManyWithWhereWithoutFollowerInput
      | FollowUpdateManyWithWhereWithoutFollowerInput[];
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[];
  };

  export type FollowUpdateManyWithoutFollowingNestedInput = {
    create?:
      | XOR<
          FollowCreateWithoutFollowingInput,
          FollowUncheckedCreateWithoutFollowingInput
        >
      | FollowCreateWithoutFollowingInput[]
      | FollowUncheckedCreateWithoutFollowingInput[];
    connectOrCreate?:
      | FollowCreateOrConnectWithoutFollowingInput
      | FollowCreateOrConnectWithoutFollowingInput[];
    upsert?:
      | FollowUpsertWithWhereUniqueWithoutFollowingInput
      | FollowUpsertWithWhereUniqueWithoutFollowingInput[];
    createMany?: FollowCreateManyFollowingInputEnvelope;
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    update?:
      | FollowUpdateWithWhereUniqueWithoutFollowingInput
      | FollowUpdateWithWhereUniqueWithoutFollowingInput[];
    updateMany?:
      | FollowUpdateManyWithWhereWithoutFollowingInput
      | FollowUpdateManyWithWhereWithoutFollowingInput[];
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[];
  };

  export type LikeUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
      | LikeCreateWithoutUserInput[]
      | LikeUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | LikeCreateOrConnectWithoutUserInput
      | LikeCreateOrConnectWithoutUserInput[];
    upsert?:
      | LikeUpsertWithWhereUniqueWithoutUserInput
      | LikeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: LikeCreateManyUserInputEnvelope;
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    update?:
      | LikeUpdateWithWhereUniqueWithoutUserInput
      | LikeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | LikeUpdateManyWithWhereWithoutUserInput
      | LikeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[];
  };

  export type ActivityUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ActivityCreateWithoutUserInput,
          ActivityUncheckedCreateWithoutUserInput
        >
      | ActivityCreateWithoutUserInput[]
      | ActivityUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ActivityCreateOrConnectWithoutUserInput
      | ActivityCreateOrConnectWithoutUserInput[];
    upsert?:
      | ActivityUpsertWithWhereUniqueWithoutUserInput
      | ActivityUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ActivityCreateManyUserInputEnvelope;
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[];
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[];
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[];
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[];
    update?:
      | ActivityUpdateWithWhereUniqueWithoutUserInput
      | ActivityUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ActivityUpdateManyWithWhereWithoutUserInput
      | ActivityUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[];
  };

  export type MovieListUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          MovieListCreateWithoutUserInput,
          MovieListUncheckedCreateWithoutUserInput
        >
      | MovieListCreateWithoutUserInput[]
      | MovieListUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | MovieListCreateOrConnectWithoutUserInput
      | MovieListCreateOrConnectWithoutUserInput[];
    upsert?:
      | MovieListUpsertWithWhereUniqueWithoutUserInput
      | MovieListUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: MovieListCreateManyUserInputEnvelope;
    set?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[];
    disconnect?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[];
    delete?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[];
    connect?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[];
    update?:
      | MovieListUpdateWithWhereUniqueWithoutUserInput
      | MovieListUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | MovieListUpdateManyWithWhereWithoutUserInput
      | MovieListUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: MovieListScalarWhereInput | MovieListScalarWhereInput[];
  };

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
      | ReviewCreateWithoutUserInput[]
      | ReviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutUserInput
      | ReviewCreateOrConnectWithoutUserInput[];
    upsert?:
      | ReviewUpsertWithWhereUniqueWithoutUserInput
      | ReviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ReviewCreateManyUserInputEnvelope;
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    update?:
      | ReviewUpdateWithWhereUniqueWithoutUserInput
      | ReviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ReviewUpdateManyWithWhereWithoutUserInput
      | ReviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[];
  };

  export type FollowUncheckedUpdateManyWithoutFollowerNestedInput = {
    create?:
      | XOR<
          FollowCreateWithoutFollowerInput,
          FollowUncheckedCreateWithoutFollowerInput
        >
      | FollowCreateWithoutFollowerInput[]
      | FollowUncheckedCreateWithoutFollowerInput[];
    connectOrCreate?:
      | FollowCreateOrConnectWithoutFollowerInput
      | FollowCreateOrConnectWithoutFollowerInput[];
    upsert?:
      | FollowUpsertWithWhereUniqueWithoutFollowerInput
      | FollowUpsertWithWhereUniqueWithoutFollowerInput[];
    createMany?: FollowCreateManyFollowerInputEnvelope;
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    update?:
      | FollowUpdateWithWhereUniqueWithoutFollowerInput
      | FollowUpdateWithWhereUniqueWithoutFollowerInput[];
    updateMany?:
      | FollowUpdateManyWithWhereWithoutFollowerInput
      | FollowUpdateManyWithWhereWithoutFollowerInput[];
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[];
  };

  export type FollowUncheckedUpdateManyWithoutFollowingNestedInput = {
    create?:
      | XOR<
          FollowCreateWithoutFollowingInput,
          FollowUncheckedCreateWithoutFollowingInput
        >
      | FollowCreateWithoutFollowingInput[]
      | FollowUncheckedCreateWithoutFollowingInput[];
    connectOrCreate?:
      | FollowCreateOrConnectWithoutFollowingInput
      | FollowCreateOrConnectWithoutFollowingInput[];
    upsert?:
      | FollowUpsertWithWhereUniqueWithoutFollowingInput
      | FollowUpsertWithWhereUniqueWithoutFollowingInput[];
    createMany?: FollowCreateManyFollowingInputEnvelope;
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    update?:
      | FollowUpdateWithWhereUniqueWithoutFollowingInput
      | FollowUpdateWithWhereUniqueWithoutFollowingInput[];
    updateMany?:
      | FollowUpdateManyWithWhereWithoutFollowingInput
      | FollowUpdateManyWithWhereWithoutFollowingInput[];
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[];
  };

  export type LikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
      | LikeCreateWithoutUserInput[]
      | LikeUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | LikeCreateOrConnectWithoutUserInput
      | LikeCreateOrConnectWithoutUserInput[];
    upsert?:
      | LikeUpsertWithWhereUniqueWithoutUserInput
      | LikeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: LikeCreateManyUserInputEnvelope;
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    update?:
      | LikeUpdateWithWhereUniqueWithoutUserInput
      | LikeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | LikeUpdateManyWithWhereWithoutUserInput
      | LikeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[];
  };

  export type ActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ActivityCreateWithoutUserInput,
          ActivityUncheckedCreateWithoutUserInput
        >
      | ActivityCreateWithoutUserInput[]
      | ActivityUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ActivityCreateOrConnectWithoutUserInput
      | ActivityCreateOrConnectWithoutUserInput[];
    upsert?:
      | ActivityUpsertWithWhereUniqueWithoutUserInput
      | ActivityUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ActivityCreateManyUserInputEnvelope;
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[];
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[];
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[];
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[];
    update?:
      | ActivityUpdateWithWhereUniqueWithoutUserInput
      | ActivityUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ActivityUpdateManyWithWhereWithoutUserInput
      | ActivityUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[];
  };

  export type MovieCreategenresInput = {
    set: string[];
  };

  export type MovieListItemCreateNestedManyWithoutMovieInput = {
    create?:
      | XOR<
          MovieListItemCreateWithoutMovieInput,
          MovieListItemUncheckedCreateWithoutMovieInput
        >
      | MovieListItemCreateWithoutMovieInput[]
      | MovieListItemUncheckedCreateWithoutMovieInput[];
    connectOrCreate?:
      | MovieListItemCreateOrConnectWithoutMovieInput
      | MovieListItemCreateOrConnectWithoutMovieInput[];
    createMany?: MovieListItemCreateManyMovieInputEnvelope;
    connect?: MovieListItemWhereUniqueInput | MovieListItemWhereUniqueInput[];
  };

  export type ReviewCreateNestedManyWithoutMovieInput = {
    create?:
      | XOR<
          ReviewCreateWithoutMovieInput,
          ReviewUncheckedCreateWithoutMovieInput
        >
      | ReviewCreateWithoutMovieInput[]
      | ReviewUncheckedCreateWithoutMovieInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutMovieInput
      | ReviewCreateOrConnectWithoutMovieInput[];
    createMany?: ReviewCreateManyMovieInputEnvelope;
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
  };

  export type LikeCreateNestedManyWithoutMovieInput = {
    create?:
      | XOR<LikeCreateWithoutMovieInput, LikeUncheckedCreateWithoutMovieInput>
      | LikeCreateWithoutMovieInput[]
      | LikeUncheckedCreateWithoutMovieInput[];
    connectOrCreate?:
      | LikeCreateOrConnectWithoutMovieInput
      | LikeCreateOrConnectWithoutMovieInput[];
    createMany?: LikeCreateManyMovieInputEnvelope;
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
  };

  export type MovieListItemUncheckedCreateNestedManyWithoutMovieInput = {
    create?:
      | XOR<
          MovieListItemCreateWithoutMovieInput,
          MovieListItemUncheckedCreateWithoutMovieInput
        >
      | MovieListItemCreateWithoutMovieInput[]
      | MovieListItemUncheckedCreateWithoutMovieInput[];
    connectOrCreate?:
      | MovieListItemCreateOrConnectWithoutMovieInput
      | MovieListItemCreateOrConnectWithoutMovieInput[];
    createMany?: MovieListItemCreateManyMovieInputEnvelope;
    connect?: MovieListItemWhereUniqueInput | MovieListItemWhereUniqueInput[];
  };

  export type ReviewUncheckedCreateNestedManyWithoutMovieInput = {
    create?:
      | XOR<
          ReviewCreateWithoutMovieInput,
          ReviewUncheckedCreateWithoutMovieInput
        >
      | ReviewCreateWithoutMovieInput[]
      | ReviewUncheckedCreateWithoutMovieInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutMovieInput
      | ReviewCreateOrConnectWithoutMovieInput[];
    createMany?: ReviewCreateManyMovieInputEnvelope;
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
  };

  export type LikeUncheckedCreateNestedManyWithoutMovieInput = {
    create?:
      | XOR<LikeCreateWithoutMovieInput, LikeUncheckedCreateWithoutMovieInput>
      | LikeCreateWithoutMovieInput[]
      | LikeUncheckedCreateWithoutMovieInput[];
    connectOrCreate?:
      | LikeCreateOrConnectWithoutMovieInput
      | LikeCreateOrConnectWithoutMovieInput[];
    createMany?: LikeCreateManyMovieInputEnvelope;
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type MovieUpdategenresInput = {
    set?: string[];
    push?: string | string[];
  };

  export type MovieListItemUpdateManyWithoutMovieNestedInput = {
    create?:
      | XOR<
          MovieListItemCreateWithoutMovieInput,
          MovieListItemUncheckedCreateWithoutMovieInput
        >
      | MovieListItemCreateWithoutMovieInput[]
      | MovieListItemUncheckedCreateWithoutMovieInput[];
    connectOrCreate?:
      | MovieListItemCreateOrConnectWithoutMovieInput
      | MovieListItemCreateOrConnectWithoutMovieInput[];
    upsert?:
      | MovieListItemUpsertWithWhereUniqueWithoutMovieInput
      | MovieListItemUpsertWithWhereUniqueWithoutMovieInput[];
    createMany?: MovieListItemCreateManyMovieInputEnvelope;
    set?: MovieListItemWhereUniqueInput | MovieListItemWhereUniqueInput[];
    disconnect?:
      | MovieListItemWhereUniqueInput
      | MovieListItemWhereUniqueInput[];
    delete?: MovieListItemWhereUniqueInput | MovieListItemWhereUniqueInput[];
    connect?: MovieListItemWhereUniqueInput | MovieListItemWhereUniqueInput[];
    update?:
      | MovieListItemUpdateWithWhereUniqueWithoutMovieInput
      | MovieListItemUpdateWithWhereUniqueWithoutMovieInput[];
    updateMany?:
      | MovieListItemUpdateManyWithWhereWithoutMovieInput
      | MovieListItemUpdateManyWithWhereWithoutMovieInput[];
    deleteMany?:
      | MovieListItemScalarWhereInput
      | MovieListItemScalarWhereInput[];
  };

  export type ReviewUpdateManyWithoutMovieNestedInput = {
    create?:
      | XOR<
          ReviewCreateWithoutMovieInput,
          ReviewUncheckedCreateWithoutMovieInput
        >
      | ReviewCreateWithoutMovieInput[]
      | ReviewUncheckedCreateWithoutMovieInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutMovieInput
      | ReviewCreateOrConnectWithoutMovieInput[];
    upsert?:
      | ReviewUpsertWithWhereUniqueWithoutMovieInput
      | ReviewUpsertWithWhereUniqueWithoutMovieInput[];
    createMany?: ReviewCreateManyMovieInputEnvelope;
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    update?:
      | ReviewUpdateWithWhereUniqueWithoutMovieInput
      | ReviewUpdateWithWhereUniqueWithoutMovieInput[];
    updateMany?:
      | ReviewUpdateManyWithWhereWithoutMovieInput
      | ReviewUpdateManyWithWhereWithoutMovieInput[];
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[];
  };

  export type LikeUpdateManyWithoutMovieNestedInput = {
    create?:
      | XOR<LikeCreateWithoutMovieInput, LikeUncheckedCreateWithoutMovieInput>
      | LikeCreateWithoutMovieInput[]
      | LikeUncheckedCreateWithoutMovieInput[];
    connectOrCreate?:
      | LikeCreateOrConnectWithoutMovieInput
      | LikeCreateOrConnectWithoutMovieInput[];
    upsert?:
      | LikeUpsertWithWhereUniqueWithoutMovieInput
      | LikeUpsertWithWhereUniqueWithoutMovieInput[];
    createMany?: LikeCreateManyMovieInputEnvelope;
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    update?:
      | LikeUpdateWithWhereUniqueWithoutMovieInput
      | LikeUpdateWithWhereUniqueWithoutMovieInput[];
    updateMany?:
      | LikeUpdateManyWithWhereWithoutMovieInput
      | LikeUpdateManyWithWhereWithoutMovieInput[];
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[];
  };

  export type MovieListItemUncheckedUpdateManyWithoutMovieNestedInput = {
    create?:
      | XOR<
          MovieListItemCreateWithoutMovieInput,
          MovieListItemUncheckedCreateWithoutMovieInput
        >
      | MovieListItemCreateWithoutMovieInput[]
      | MovieListItemUncheckedCreateWithoutMovieInput[];
    connectOrCreate?:
      | MovieListItemCreateOrConnectWithoutMovieInput
      | MovieListItemCreateOrConnectWithoutMovieInput[];
    upsert?:
      | MovieListItemUpsertWithWhereUniqueWithoutMovieInput
      | MovieListItemUpsertWithWhereUniqueWithoutMovieInput[];
    createMany?: MovieListItemCreateManyMovieInputEnvelope;
    set?: MovieListItemWhereUniqueInput | MovieListItemWhereUniqueInput[];
    disconnect?:
      | MovieListItemWhereUniqueInput
      | MovieListItemWhereUniqueInput[];
    delete?: MovieListItemWhereUniqueInput | MovieListItemWhereUniqueInput[];
    connect?: MovieListItemWhereUniqueInput | MovieListItemWhereUniqueInput[];
    update?:
      | MovieListItemUpdateWithWhereUniqueWithoutMovieInput
      | MovieListItemUpdateWithWhereUniqueWithoutMovieInput[];
    updateMany?:
      | MovieListItemUpdateManyWithWhereWithoutMovieInput
      | MovieListItemUpdateManyWithWhereWithoutMovieInput[];
    deleteMany?:
      | MovieListItemScalarWhereInput
      | MovieListItemScalarWhereInput[];
  };

  export type ReviewUncheckedUpdateManyWithoutMovieNestedInput = {
    create?:
      | XOR<
          ReviewCreateWithoutMovieInput,
          ReviewUncheckedCreateWithoutMovieInput
        >
      | ReviewCreateWithoutMovieInput[]
      | ReviewUncheckedCreateWithoutMovieInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutMovieInput
      | ReviewCreateOrConnectWithoutMovieInput[];
    upsert?:
      | ReviewUpsertWithWhereUniqueWithoutMovieInput
      | ReviewUpsertWithWhereUniqueWithoutMovieInput[];
    createMany?: ReviewCreateManyMovieInputEnvelope;
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    update?:
      | ReviewUpdateWithWhereUniqueWithoutMovieInput
      | ReviewUpdateWithWhereUniqueWithoutMovieInput[];
    updateMany?:
      | ReviewUpdateManyWithWhereWithoutMovieInput
      | ReviewUpdateManyWithWhereWithoutMovieInput[];
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[];
  };

  export type LikeUncheckedUpdateManyWithoutMovieNestedInput = {
    create?:
      | XOR<LikeCreateWithoutMovieInput, LikeUncheckedCreateWithoutMovieInput>
      | LikeCreateWithoutMovieInput[]
      | LikeUncheckedCreateWithoutMovieInput[];
    connectOrCreate?:
      | LikeCreateOrConnectWithoutMovieInput
      | LikeCreateOrConnectWithoutMovieInput[];
    upsert?:
      | LikeUpsertWithWhereUniqueWithoutMovieInput
      | LikeUpsertWithWhereUniqueWithoutMovieInput[];
    createMany?: LikeCreateManyMovieInputEnvelope;
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    update?:
      | LikeUpdateWithWhereUniqueWithoutMovieInput
      | LikeUpdateWithWhereUniqueWithoutMovieInput[];
    updateMany?:
      | LikeUpdateManyWithWhereWithoutMovieInput
      | LikeUpdateManyWithWhereWithoutMovieInput[];
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutMovieListsInput = {
    create?: XOR<
      UserCreateWithoutMovieListsInput,
      UserUncheckedCreateWithoutMovieListsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutMovieListsInput;
    connect?: UserWhereUniqueInput;
  };

  export type MovieListItemCreateNestedManyWithoutMovieListInput = {
    create?:
      | XOR<
          MovieListItemCreateWithoutMovieListInput,
          MovieListItemUncheckedCreateWithoutMovieListInput
        >
      | MovieListItemCreateWithoutMovieListInput[]
      | MovieListItemUncheckedCreateWithoutMovieListInput[];
    connectOrCreate?:
      | MovieListItemCreateOrConnectWithoutMovieListInput
      | MovieListItemCreateOrConnectWithoutMovieListInput[];
    createMany?: MovieListItemCreateManyMovieListInputEnvelope;
    connect?: MovieListItemWhereUniqueInput | MovieListItemWhereUniqueInput[];
  };

  export type MovieListItemUncheckedCreateNestedManyWithoutMovieListInput = {
    create?:
      | XOR<
          MovieListItemCreateWithoutMovieListInput,
          MovieListItemUncheckedCreateWithoutMovieListInput
        >
      | MovieListItemCreateWithoutMovieListInput[]
      | MovieListItemUncheckedCreateWithoutMovieListInput[];
    connectOrCreate?:
      | MovieListItemCreateOrConnectWithoutMovieListInput
      | MovieListItemCreateOrConnectWithoutMovieListInput[];
    createMany?: MovieListItemCreateManyMovieListInputEnvelope;
    connect?: MovieListItemWhereUniqueInput | MovieListItemWhereUniqueInput[];
  };

  export type EnumMovieListTypeFieldUpdateOperationsInput = {
    set?: $Enums.MovieListType;
  };

  export type EnumPrivacyLevelFieldUpdateOperationsInput = {
    set?: $Enums.PrivacyLevel;
  };

  export type UserUpdateOneRequiredWithoutMovieListsNestedInput = {
    create?: XOR<
      UserCreateWithoutMovieListsInput,
      UserUncheckedCreateWithoutMovieListsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutMovieListsInput;
    upsert?: UserUpsertWithoutMovieListsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutMovieListsInput,
        UserUpdateWithoutMovieListsInput
      >,
      UserUncheckedUpdateWithoutMovieListsInput
    >;
  };

  export type MovieListItemUpdateManyWithoutMovieListNestedInput = {
    create?:
      | XOR<
          MovieListItemCreateWithoutMovieListInput,
          MovieListItemUncheckedCreateWithoutMovieListInput
        >
      | MovieListItemCreateWithoutMovieListInput[]
      | MovieListItemUncheckedCreateWithoutMovieListInput[];
    connectOrCreate?:
      | MovieListItemCreateOrConnectWithoutMovieListInput
      | MovieListItemCreateOrConnectWithoutMovieListInput[];
    upsert?:
      | MovieListItemUpsertWithWhereUniqueWithoutMovieListInput
      | MovieListItemUpsertWithWhereUniqueWithoutMovieListInput[];
    createMany?: MovieListItemCreateManyMovieListInputEnvelope;
    set?: MovieListItemWhereUniqueInput | MovieListItemWhereUniqueInput[];
    disconnect?:
      | MovieListItemWhereUniqueInput
      | MovieListItemWhereUniqueInput[];
    delete?: MovieListItemWhereUniqueInput | MovieListItemWhereUniqueInput[];
    connect?: MovieListItemWhereUniqueInput | MovieListItemWhereUniqueInput[];
    update?:
      | MovieListItemUpdateWithWhereUniqueWithoutMovieListInput
      | MovieListItemUpdateWithWhereUniqueWithoutMovieListInput[];
    updateMany?:
      | MovieListItemUpdateManyWithWhereWithoutMovieListInput
      | MovieListItemUpdateManyWithWhereWithoutMovieListInput[];
    deleteMany?:
      | MovieListItemScalarWhereInput
      | MovieListItemScalarWhereInput[];
  };

  export type MovieListItemUncheckedUpdateManyWithoutMovieListNestedInput = {
    create?:
      | XOR<
          MovieListItemCreateWithoutMovieListInput,
          MovieListItemUncheckedCreateWithoutMovieListInput
        >
      | MovieListItemCreateWithoutMovieListInput[]
      | MovieListItemUncheckedCreateWithoutMovieListInput[];
    connectOrCreate?:
      | MovieListItemCreateOrConnectWithoutMovieListInput
      | MovieListItemCreateOrConnectWithoutMovieListInput[];
    upsert?:
      | MovieListItemUpsertWithWhereUniqueWithoutMovieListInput
      | MovieListItemUpsertWithWhereUniqueWithoutMovieListInput[];
    createMany?: MovieListItemCreateManyMovieListInputEnvelope;
    set?: MovieListItemWhereUniqueInput | MovieListItemWhereUniqueInput[];
    disconnect?:
      | MovieListItemWhereUniqueInput
      | MovieListItemWhereUniqueInput[];
    delete?: MovieListItemWhereUniqueInput | MovieListItemWhereUniqueInput[];
    connect?: MovieListItemWhereUniqueInput | MovieListItemWhereUniqueInput[];
    update?:
      | MovieListItemUpdateWithWhereUniqueWithoutMovieListInput
      | MovieListItemUpdateWithWhereUniqueWithoutMovieListInput[];
    updateMany?:
      | MovieListItemUpdateManyWithWhereWithoutMovieListInput
      | MovieListItemUpdateManyWithWhereWithoutMovieListInput[];
    deleteMany?:
      | MovieListItemScalarWhereInput
      | MovieListItemScalarWhereInput[];
  };

  export type MovieListCreateNestedOneWithoutItemsInput = {
    create?: XOR<
      MovieListCreateWithoutItemsInput,
      MovieListUncheckedCreateWithoutItemsInput
    >;
    connectOrCreate?: MovieListCreateOrConnectWithoutItemsInput;
    connect?: MovieListWhereUniqueInput;
  };

  export type MovieCreateNestedOneWithoutMovieListItemsInput = {
    create?: XOR<
      MovieCreateWithoutMovieListItemsInput,
      MovieUncheckedCreateWithoutMovieListItemsInput
    >;
    connectOrCreate?: MovieCreateOrConnectWithoutMovieListItemsInput;
    connect?: MovieWhereUniqueInput;
  };

  export type MovieListUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<
      MovieListCreateWithoutItemsInput,
      MovieListUncheckedCreateWithoutItemsInput
    >;
    connectOrCreate?: MovieListCreateOrConnectWithoutItemsInput;
    upsert?: MovieListUpsertWithoutItemsInput;
    connect?: MovieListWhereUniqueInput;
    update?: XOR<
      XOR<
        MovieListUpdateToOneWithWhereWithoutItemsInput,
        MovieListUpdateWithoutItemsInput
      >,
      MovieListUncheckedUpdateWithoutItemsInput
    >;
  };

  export type MovieUpdateOneRequiredWithoutMovieListItemsNestedInput = {
    create?: XOR<
      MovieCreateWithoutMovieListItemsInput,
      MovieUncheckedCreateWithoutMovieListItemsInput
    >;
    connectOrCreate?: MovieCreateOrConnectWithoutMovieListItemsInput;
    upsert?: MovieUpsertWithoutMovieListItemsInput;
    connect?: MovieWhereUniqueInput;
    update?: XOR<
      XOR<
        MovieUpdateToOneWithWhereWithoutMovieListItemsInput,
        MovieUpdateWithoutMovieListItemsInput
      >,
      MovieUncheckedUpdateWithoutMovieListItemsInput
    >;
  };

  export type MovieCreateNestedOneWithoutReviewsInput = {
    create?: XOR<
      MovieCreateWithoutReviewsInput,
      MovieUncheckedCreateWithoutReviewsInput
    >;
    connectOrCreate?: MovieCreateOrConnectWithoutReviewsInput;
    connect?: MovieWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<
      UserCreateWithoutReviewsInput,
      UserUncheckedCreateWithoutReviewsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput;
    connect?: UserWhereUniqueInput;
  };

  export type LikeCreateNestedManyWithoutReviewInput = {
    create?:
      | XOR<LikeCreateWithoutReviewInput, LikeUncheckedCreateWithoutReviewInput>
      | LikeCreateWithoutReviewInput[]
      | LikeUncheckedCreateWithoutReviewInput[];
    connectOrCreate?:
      | LikeCreateOrConnectWithoutReviewInput
      | LikeCreateOrConnectWithoutReviewInput[];
    createMany?: LikeCreateManyReviewInputEnvelope;
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
  };

  export type LikeUncheckedCreateNestedManyWithoutReviewInput = {
    create?:
      | XOR<LikeCreateWithoutReviewInput, LikeUncheckedCreateWithoutReviewInput>
      | LikeCreateWithoutReviewInput[]
      | LikeUncheckedCreateWithoutReviewInput[];
    connectOrCreate?:
      | LikeCreateOrConnectWithoutReviewInput
      | LikeCreateOrConnectWithoutReviewInput[];
    createMany?: LikeCreateManyReviewInputEnvelope;
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
  };

  export type MovieUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<
      MovieCreateWithoutReviewsInput,
      MovieUncheckedCreateWithoutReviewsInput
    >;
    connectOrCreate?: MovieCreateOrConnectWithoutReviewsInput;
    upsert?: MovieUpsertWithoutReviewsInput;
    connect?: MovieWhereUniqueInput;
    update?: XOR<
      XOR<
        MovieUpdateToOneWithWhereWithoutReviewsInput,
        MovieUpdateWithoutReviewsInput
      >,
      MovieUncheckedUpdateWithoutReviewsInput
    >;
  };

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<
      UserCreateWithoutReviewsInput,
      UserUncheckedCreateWithoutReviewsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput;
    upsert?: UserUpsertWithoutReviewsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutReviewsInput,
        UserUpdateWithoutReviewsInput
      >,
      UserUncheckedUpdateWithoutReviewsInput
    >;
  };

  export type LikeUpdateManyWithoutReviewNestedInput = {
    create?:
      | XOR<LikeCreateWithoutReviewInput, LikeUncheckedCreateWithoutReviewInput>
      | LikeCreateWithoutReviewInput[]
      | LikeUncheckedCreateWithoutReviewInput[];
    connectOrCreate?:
      | LikeCreateOrConnectWithoutReviewInput
      | LikeCreateOrConnectWithoutReviewInput[];
    upsert?:
      | LikeUpsertWithWhereUniqueWithoutReviewInput
      | LikeUpsertWithWhereUniqueWithoutReviewInput[];
    createMany?: LikeCreateManyReviewInputEnvelope;
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    update?:
      | LikeUpdateWithWhereUniqueWithoutReviewInput
      | LikeUpdateWithWhereUniqueWithoutReviewInput[];
    updateMany?:
      | LikeUpdateManyWithWhereWithoutReviewInput
      | LikeUpdateManyWithWhereWithoutReviewInput[];
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[];
  };

  export type LikeUncheckedUpdateManyWithoutReviewNestedInput = {
    create?:
      | XOR<LikeCreateWithoutReviewInput, LikeUncheckedCreateWithoutReviewInput>
      | LikeCreateWithoutReviewInput[]
      | LikeUncheckedCreateWithoutReviewInput[];
    connectOrCreate?:
      | LikeCreateOrConnectWithoutReviewInput
      | LikeCreateOrConnectWithoutReviewInput[];
    upsert?:
      | LikeUpsertWithWhereUniqueWithoutReviewInput
      | LikeUpsertWithWhereUniqueWithoutReviewInput[];
    createMany?: LikeCreateManyReviewInputEnvelope;
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    update?:
      | LikeUpdateWithWhereUniqueWithoutReviewInput
      | LikeUpdateWithWhereUniqueWithoutReviewInput[];
    updateMany?:
      | LikeUpdateManyWithWhereWithoutReviewInput
      | LikeUpdateManyWithWhereWithoutReviewInput[];
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutFollowersInput = {
    create?: XOR<
      UserCreateWithoutFollowersInput,
      UserUncheckedCreateWithoutFollowersInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutFollowingInput = {
    create?: XOR<
      UserCreateWithoutFollowingInput,
      UserUncheckedCreateWithoutFollowingInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<
      UserCreateWithoutFollowersInput,
      UserUncheckedCreateWithoutFollowersInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput;
    upsert?: UserUpsertWithoutFollowersInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutFollowersInput,
        UserUpdateWithoutFollowersInput
      >,
      UserUncheckedUpdateWithoutFollowersInput
    >;
  };

  export type UserUpdateOneRequiredWithoutFollowingNestedInput = {
    create?: XOR<
      UserCreateWithoutFollowingInput,
      UserUncheckedCreateWithoutFollowingInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput;
    upsert?: UserUpsertWithoutFollowingInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutFollowingInput,
        UserUpdateWithoutFollowingInput
      >,
      UserUncheckedUpdateWithoutFollowingInput
    >;
  };

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<
      UserCreateWithoutLikesInput,
      UserUncheckedCreateWithoutLikesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput;
    connect?: UserWhereUniqueInput;
  };

  export type MovieCreateNestedOneWithoutLikesInput = {
    create?: XOR<
      MovieCreateWithoutLikesInput,
      MovieUncheckedCreateWithoutLikesInput
    >;
    connectOrCreate?: MovieCreateOrConnectWithoutLikesInput;
    connect?: MovieWhereUniqueInput;
  };

  export type ReviewCreateNestedOneWithoutLikesInput = {
    create?: XOR<
      ReviewCreateWithoutLikesInput,
      ReviewUncheckedCreateWithoutLikesInput
    >;
    connectOrCreate?: ReviewCreateOrConnectWithoutLikesInput;
    connect?: ReviewWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<
      UserCreateWithoutLikesInput,
      UserUncheckedCreateWithoutLikesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput;
    upsert?: UserUpsertWithoutLikesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutLikesInput,
        UserUpdateWithoutLikesInput
      >,
      UserUncheckedUpdateWithoutLikesInput
    >;
  };

  export type MovieUpdateOneWithoutLikesNestedInput = {
    create?: XOR<
      MovieCreateWithoutLikesInput,
      MovieUncheckedCreateWithoutLikesInput
    >;
    connectOrCreate?: MovieCreateOrConnectWithoutLikesInput;
    upsert?: MovieUpsertWithoutLikesInput;
    disconnect?: MovieWhereInput | boolean;
    delete?: MovieWhereInput | boolean;
    connect?: MovieWhereUniqueInput;
    update?: XOR<
      XOR<
        MovieUpdateToOneWithWhereWithoutLikesInput,
        MovieUpdateWithoutLikesInput
      >,
      MovieUncheckedUpdateWithoutLikesInput
    >;
  };

  export type ReviewUpdateOneWithoutLikesNestedInput = {
    create?: XOR<
      ReviewCreateWithoutLikesInput,
      ReviewUncheckedCreateWithoutLikesInput
    >;
    connectOrCreate?: ReviewCreateOrConnectWithoutLikesInput;
    upsert?: ReviewUpsertWithoutLikesInput;
    disconnect?: ReviewWhereInput | boolean;
    delete?: ReviewWhereInput | boolean;
    connect?: ReviewWhereUniqueInput;
    update?: XOR<
      XOR<
        ReviewUpdateToOneWithWhereWithoutLikesInput,
        ReviewUpdateWithoutLikesInput
      >,
      ReviewUncheckedUpdateWithoutLikesInput
    >;
  };

  export type UserCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<
      UserCreateWithoutActivitiesInput,
      UserUncheckedCreateWithoutActivitiesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput;
    connect?: UserWhereUniqueInput;
  };

  export type EnumActivityTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActivityType;
  };

  export type UserUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<
      UserCreateWithoutActivitiesInput,
      UserUncheckedCreateWithoutActivitiesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput;
    upsert?: UserUpsertWithoutActivitiesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutActivitiesInput,
        UserUpdateWithoutActivitiesInput
      >,
      UserUncheckedUpdateWithoutActivitiesInput
    >;
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type NestedEnumMovieListTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.MovieListType
      | EnumMovieListTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.MovieListType[]
      | ListEnumMovieListTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.MovieListType[]
      | ListEnumMovieListTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumMovieListTypeFilter<$PrismaModel> | $Enums.MovieListType;
  };

  export type NestedEnumPrivacyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.PrivacyLevel | EnumPrivacyLevelFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.PrivacyLevel[]
      | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.PrivacyLevel[]
      | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>;
    not?: NestedEnumPrivacyLevelFilter<$PrismaModel> | $Enums.PrivacyLevel;
  };

  export type NestedEnumMovieListTypeWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.MovieListType
      | EnumMovieListTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.MovieListType[]
      | ListEnumMovieListTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.MovieListType[]
      | ListEnumMovieListTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumMovieListTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.MovieListType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumMovieListTypeFilter<$PrismaModel>;
    _max?: NestedEnumMovieListTypeFilter<$PrismaModel>;
  };

  export type NestedEnumPrivacyLevelWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.PrivacyLevel
        | EnumPrivacyLevelFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.PrivacyLevel[]
        | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.PrivacyLevel[]
        | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumPrivacyLevelWithAggregatesFilter<$PrismaModel>
        | $Enums.PrivacyLevel;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumPrivacyLevelFilter<$PrismaModel>;
      _max?: NestedEnumPrivacyLevelFilter<$PrismaModel>;
    };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedEnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ActivityType[]
      | ListEnumActivityTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ActivityType[]
      | ListEnumActivityTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType;
  };

  export type NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.ActivityType
        | EnumActivityTypeFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.ActivityType[]
        | ListEnumActivityTypeFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.ActivityType[]
        | ListEnumActivityTypeFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel>
        | $Enums.ActivityType;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumActivityTypeFilter<$PrismaModel>;
      _max?: NestedEnumActivityTypeFilter<$PrismaModel>;
    };
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type MovieListCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    type: $Enums.MovieListType;
    privacy?: $Enums.PrivacyLevel;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: MovieListItemCreateNestedManyWithoutMovieListInput;
  };

  export type MovieListUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    type: $Enums.MovieListType;
    privacy?: $Enums.PrivacyLevel;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: MovieListItemUncheckedCreateNestedManyWithoutMovieListInput;
  };

  export type MovieListCreateOrConnectWithoutUserInput = {
    where: MovieListWhereUniqueInput;
    create: XOR<
      MovieListCreateWithoutUserInput,
      MovieListUncheckedCreateWithoutUserInput
    >;
  };

  export type MovieListCreateManyUserInputEnvelope = {
    data: MovieListCreateManyUserInput | MovieListCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ReviewCreateWithoutUserInput = {
    id?: string;
    content: string;
    rating: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movie: MovieCreateNestedOneWithoutReviewsInput;
    likes?: LikeCreateNestedManyWithoutReviewInput;
  };

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: string;
    content: string;
    rating: number;
    movieId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    likes?: LikeUncheckedCreateNestedManyWithoutReviewInput;
  };

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput;
    create: XOR<
      ReviewCreateWithoutUserInput,
      ReviewUncheckedCreateWithoutUserInput
    >;
  };

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type FollowCreateWithoutFollowerInput = {
    id?: string;
    createdAt?: Date | string;
    following: UserCreateNestedOneWithoutFollowingInput;
  };

  export type FollowUncheckedCreateWithoutFollowerInput = {
    id?: string;
    followingId: string;
    createdAt?: Date | string;
  };

  export type FollowCreateOrConnectWithoutFollowerInput = {
    where: FollowWhereUniqueInput;
    create: XOR<
      FollowCreateWithoutFollowerInput,
      FollowUncheckedCreateWithoutFollowerInput
    >;
  };

  export type FollowCreateManyFollowerInputEnvelope = {
    data: FollowCreateManyFollowerInput | FollowCreateManyFollowerInput[];
    skipDuplicates?: boolean;
  };

  export type FollowCreateWithoutFollowingInput = {
    id?: string;
    createdAt?: Date | string;
    follower: UserCreateNestedOneWithoutFollowersInput;
  };

  export type FollowUncheckedCreateWithoutFollowingInput = {
    id?: string;
    followerId: string;
    createdAt?: Date | string;
  };

  export type FollowCreateOrConnectWithoutFollowingInput = {
    where: FollowWhereUniqueInput;
    create: XOR<
      FollowCreateWithoutFollowingInput,
      FollowUncheckedCreateWithoutFollowingInput
    >;
  };

  export type FollowCreateManyFollowingInputEnvelope = {
    data: FollowCreateManyFollowingInput | FollowCreateManyFollowingInput[];
    skipDuplicates?: boolean;
  };

  export type LikeCreateWithoutUserInput = {
    id?: string;
    createdAt?: Date | string;
    movie?: MovieCreateNestedOneWithoutLikesInput;
    review?: ReviewCreateNestedOneWithoutLikesInput;
  };

  export type LikeUncheckedCreateWithoutUserInput = {
    id?: string;
    movieId?: string | null;
    reviewId?: string | null;
    createdAt?: Date | string;
  };

  export type LikeCreateOrConnectWithoutUserInput = {
    where: LikeWhereUniqueInput;
    create: XOR<
      LikeCreateWithoutUserInput,
      LikeUncheckedCreateWithoutUserInput
    >;
  };

  export type LikeCreateManyUserInputEnvelope = {
    data: LikeCreateManyUserInput | LikeCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ActivityCreateWithoutUserInput = {
    id?: string;
    type: $Enums.ActivityType;
    data: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
  };

  export type ActivityUncheckedCreateWithoutUserInput = {
    id?: string;
    type: $Enums.ActivityType;
    data: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
  };

  export type ActivityCreateOrConnectWithoutUserInput = {
    where: ActivityWhereUniqueInput;
    create: XOR<
      ActivityCreateWithoutUserInput,
      ActivityUncheckedCreateWithoutUserInput
    >;
  };

  export type ActivityCreateManyUserInputEnvelope = {
    data: ActivityCreateManyUserInput | ActivityCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type MovieListUpsertWithWhereUniqueWithoutUserInput = {
    where: MovieListWhereUniqueInput;
    update: XOR<
      MovieListUpdateWithoutUserInput,
      MovieListUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      MovieListCreateWithoutUserInput,
      MovieListUncheckedCreateWithoutUserInput
    >;
  };

  export type MovieListUpdateWithWhereUniqueWithoutUserInput = {
    where: MovieListWhereUniqueInput;
    data: XOR<
      MovieListUpdateWithoutUserInput,
      MovieListUncheckedUpdateWithoutUserInput
    >;
  };

  export type MovieListUpdateManyWithWhereWithoutUserInput = {
    where: MovieListScalarWhereInput;
    data: XOR<
      MovieListUpdateManyMutationInput,
      MovieListUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type MovieListScalarWhereInput = {
    AND?: MovieListScalarWhereInput | MovieListScalarWhereInput[];
    OR?: MovieListScalarWhereInput[];
    NOT?: MovieListScalarWhereInput | MovieListScalarWhereInput[];
    id?: UuidFilter<'MovieList'> | string;
    name?: StringFilter<'MovieList'> | string;
    description?: StringNullableFilter<'MovieList'> | string | null;
    type?: EnumMovieListTypeFilter<'MovieList'> | $Enums.MovieListType;
    privacy?: EnumPrivacyLevelFilter<'MovieList'> | $Enums.PrivacyLevel;
    userId?: UuidFilter<'MovieList'> | string;
    createdAt?: DateTimeFilter<'MovieList'> | Date | string;
    updatedAt?: DateTimeFilter<'MovieList'> | Date | string;
  };

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput;
    update: XOR<
      ReviewUpdateWithoutUserInput,
      ReviewUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ReviewCreateWithoutUserInput,
      ReviewUncheckedCreateWithoutUserInput
    >;
  };

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput;
    data: XOR<
      ReviewUpdateWithoutUserInput,
      ReviewUncheckedUpdateWithoutUserInput
    >;
  };

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput;
    data: XOR<
      ReviewUpdateManyMutationInput,
      ReviewUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[];
    OR?: ReviewScalarWhereInput[];
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[];
    id?: UuidFilter<'Review'> | string;
    content?: StringFilter<'Review'> | string;
    rating?: IntFilter<'Review'> | number;
    movieId?: UuidFilter<'Review'> | string;
    userId?: UuidFilter<'Review'> | string;
    createdAt?: DateTimeFilter<'Review'> | Date | string;
    updatedAt?: DateTimeFilter<'Review'> | Date | string;
  };

  export type FollowUpsertWithWhereUniqueWithoutFollowerInput = {
    where: FollowWhereUniqueInput;
    update: XOR<
      FollowUpdateWithoutFollowerInput,
      FollowUncheckedUpdateWithoutFollowerInput
    >;
    create: XOR<
      FollowCreateWithoutFollowerInput,
      FollowUncheckedCreateWithoutFollowerInput
    >;
  };

  export type FollowUpdateWithWhereUniqueWithoutFollowerInput = {
    where: FollowWhereUniqueInput;
    data: XOR<
      FollowUpdateWithoutFollowerInput,
      FollowUncheckedUpdateWithoutFollowerInput
    >;
  };

  export type FollowUpdateManyWithWhereWithoutFollowerInput = {
    where: FollowScalarWhereInput;
    data: XOR<
      FollowUpdateManyMutationInput,
      FollowUncheckedUpdateManyWithoutFollowerInput
    >;
  };

  export type FollowScalarWhereInput = {
    AND?: FollowScalarWhereInput | FollowScalarWhereInput[];
    OR?: FollowScalarWhereInput[];
    NOT?: FollowScalarWhereInput | FollowScalarWhereInput[];
    id?: UuidFilter<'Follow'> | string;
    followerId?: UuidFilter<'Follow'> | string;
    followingId?: UuidFilter<'Follow'> | string;
    createdAt?: DateTimeFilter<'Follow'> | Date | string;
  };

  export type FollowUpsertWithWhereUniqueWithoutFollowingInput = {
    where: FollowWhereUniqueInput;
    update: XOR<
      FollowUpdateWithoutFollowingInput,
      FollowUncheckedUpdateWithoutFollowingInput
    >;
    create: XOR<
      FollowCreateWithoutFollowingInput,
      FollowUncheckedCreateWithoutFollowingInput
    >;
  };

  export type FollowUpdateWithWhereUniqueWithoutFollowingInput = {
    where: FollowWhereUniqueInput;
    data: XOR<
      FollowUpdateWithoutFollowingInput,
      FollowUncheckedUpdateWithoutFollowingInput
    >;
  };

  export type FollowUpdateManyWithWhereWithoutFollowingInput = {
    where: FollowScalarWhereInput;
    data: XOR<
      FollowUpdateManyMutationInput,
      FollowUncheckedUpdateManyWithoutFollowingInput
    >;
  };

  export type LikeUpsertWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput;
    update: XOR<
      LikeUpdateWithoutUserInput,
      LikeUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      LikeCreateWithoutUserInput,
      LikeUncheckedCreateWithoutUserInput
    >;
  };

  export type LikeUpdateWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput;
    data: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>;
  };

  export type LikeUpdateManyWithWhereWithoutUserInput = {
    where: LikeScalarWhereInput;
    data: XOR<
      LikeUpdateManyMutationInput,
      LikeUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type LikeScalarWhereInput = {
    AND?: LikeScalarWhereInput | LikeScalarWhereInput[];
    OR?: LikeScalarWhereInput[];
    NOT?: LikeScalarWhereInput | LikeScalarWhereInput[];
    id?: UuidFilter<'Like'> | string;
    userId?: UuidFilter<'Like'> | string;
    movieId?: UuidNullableFilter<'Like'> | string | null;
    reviewId?: UuidNullableFilter<'Like'> | string | null;
    createdAt?: DateTimeFilter<'Like'> | Date | string;
  };

  export type ActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityWhereUniqueInput;
    update: XOR<
      ActivityUpdateWithoutUserInput,
      ActivityUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ActivityCreateWithoutUserInput,
      ActivityUncheckedCreateWithoutUserInput
    >;
  };

  export type ActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityWhereUniqueInput;
    data: XOR<
      ActivityUpdateWithoutUserInput,
      ActivityUncheckedUpdateWithoutUserInput
    >;
  };

  export type ActivityUpdateManyWithWhereWithoutUserInput = {
    where: ActivityScalarWhereInput;
    data: XOR<
      ActivityUpdateManyMutationInput,
      ActivityUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[];
    OR?: ActivityScalarWhereInput[];
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[];
    id?: UuidFilter<'Activity'> | string;
    type?: EnumActivityTypeFilter<'Activity'> | $Enums.ActivityType;
    userId?: UuidFilter<'Activity'> | string;
    data?: JsonFilter<'Activity'>;
    createdAt?: DateTimeFilter<'Activity'> | Date | string;
  };

  export type MovieListItemCreateWithoutMovieInput = {
    id?: string;
    notes?: string | null;
    rating?: number | null;
    watchedAt?: Date | string | null;
    addedAt?: Date | string;
    movieList: MovieListCreateNestedOneWithoutItemsInput;
  };

  export type MovieListItemUncheckedCreateWithoutMovieInput = {
    id?: string;
    movieListId: string;
    notes?: string | null;
    rating?: number | null;
    watchedAt?: Date | string | null;
    addedAt?: Date | string;
  };

  export type MovieListItemCreateOrConnectWithoutMovieInput = {
    where: MovieListItemWhereUniqueInput;
    create: XOR<
      MovieListItemCreateWithoutMovieInput,
      MovieListItemUncheckedCreateWithoutMovieInput
    >;
  };

  export type MovieListItemCreateManyMovieInputEnvelope = {
    data:
      | MovieListItemCreateManyMovieInput
      | MovieListItemCreateManyMovieInput[];
    skipDuplicates?: boolean;
  };

  export type ReviewCreateWithoutMovieInput = {
    id?: string;
    content: string;
    rating: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutReviewsInput;
    likes?: LikeCreateNestedManyWithoutReviewInput;
  };

  export type ReviewUncheckedCreateWithoutMovieInput = {
    id?: string;
    content: string;
    rating: number;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    likes?: LikeUncheckedCreateNestedManyWithoutReviewInput;
  };

  export type ReviewCreateOrConnectWithoutMovieInput = {
    where: ReviewWhereUniqueInput;
    create: XOR<
      ReviewCreateWithoutMovieInput,
      ReviewUncheckedCreateWithoutMovieInput
    >;
  };

  export type ReviewCreateManyMovieInputEnvelope = {
    data: ReviewCreateManyMovieInput | ReviewCreateManyMovieInput[];
    skipDuplicates?: boolean;
  };

  export type LikeCreateWithoutMovieInput = {
    id?: string;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutLikesInput;
    review?: ReviewCreateNestedOneWithoutLikesInput;
  };

  export type LikeUncheckedCreateWithoutMovieInput = {
    id?: string;
    userId: string;
    reviewId?: string | null;
    createdAt?: Date | string;
  };

  export type LikeCreateOrConnectWithoutMovieInput = {
    where: LikeWhereUniqueInput;
    create: XOR<
      LikeCreateWithoutMovieInput,
      LikeUncheckedCreateWithoutMovieInput
    >;
  };

  export type LikeCreateManyMovieInputEnvelope = {
    data: LikeCreateManyMovieInput | LikeCreateManyMovieInput[];
    skipDuplicates?: boolean;
  };

  export type MovieListItemUpsertWithWhereUniqueWithoutMovieInput = {
    where: MovieListItemWhereUniqueInput;
    update: XOR<
      MovieListItemUpdateWithoutMovieInput,
      MovieListItemUncheckedUpdateWithoutMovieInput
    >;
    create: XOR<
      MovieListItemCreateWithoutMovieInput,
      MovieListItemUncheckedCreateWithoutMovieInput
    >;
  };

  export type MovieListItemUpdateWithWhereUniqueWithoutMovieInput = {
    where: MovieListItemWhereUniqueInput;
    data: XOR<
      MovieListItemUpdateWithoutMovieInput,
      MovieListItemUncheckedUpdateWithoutMovieInput
    >;
  };

  export type MovieListItemUpdateManyWithWhereWithoutMovieInput = {
    where: MovieListItemScalarWhereInput;
    data: XOR<
      MovieListItemUpdateManyMutationInput,
      MovieListItemUncheckedUpdateManyWithoutMovieInput
    >;
  };

  export type MovieListItemScalarWhereInput = {
    AND?: MovieListItemScalarWhereInput | MovieListItemScalarWhereInput[];
    OR?: MovieListItemScalarWhereInput[];
    NOT?: MovieListItemScalarWhereInput | MovieListItemScalarWhereInput[];
    id?: UuidFilter<'MovieListItem'> | string;
    movieListId?: UuidFilter<'MovieListItem'> | string;
    movieId?: UuidFilter<'MovieListItem'> | string;
    notes?: StringNullableFilter<'MovieListItem'> | string | null;
    rating?: IntNullableFilter<'MovieListItem'> | number | null;
    watchedAt?: DateTimeNullableFilter<'MovieListItem'> | Date | string | null;
    addedAt?: DateTimeFilter<'MovieListItem'> | Date | string;
  };

  export type ReviewUpsertWithWhereUniqueWithoutMovieInput = {
    where: ReviewWhereUniqueInput;
    update: XOR<
      ReviewUpdateWithoutMovieInput,
      ReviewUncheckedUpdateWithoutMovieInput
    >;
    create: XOR<
      ReviewCreateWithoutMovieInput,
      ReviewUncheckedCreateWithoutMovieInput
    >;
  };

  export type ReviewUpdateWithWhereUniqueWithoutMovieInput = {
    where: ReviewWhereUniqueInput;
    data: XOR<
      ReviewUpdateWithoutMovieInput,
      ReviewUncheckedUpdateWithoutMovieInput
    >;
  };

  export type ReviewUpdateManyWithWhereWithoutMovieInput = {
    where: ReviewScalarWhereInput;
    data: XOR<
      ReviewUpdateManyMutationInput,
      ReviewUncheckedUpdateManyWithoutMovieInput
    >;
  };

  export type LikeUpsertWithWhereUniqueWithoutMovieInput = {
    where: LikeWhereUniqueInput;
    update: XOR<
      LikeUpdateWithoutMovieInput,
      LikeUncheckedUpdateWithoutMovieInput
    >;
    create: XOR<
      LikeCreateWithoutMovieInput,
      LikeUncheckedCreateWithoutMovieInput
    >;
  };

  export type LikeUpdateWithWhereUniqueWithoutMovieInput = {
    where: LikeWhereUniqueInput;
    data: XOR<
      LikeUpdateWithoutMovieInput,
      LikeUncheckedUpdateWithoutMovieInput
    >;
  };

  export type LikeUpdateManyWithWhereWithoutMovieInput = {
    where: LikeScalarWhereInput;
    data: XOR<
      LikeUpdateManyMutationInput,
      LikeUncheckedUpdateManyWithoutMovieInput
    >;
  };

  export type UserCreateWithoutMovieListsInput = {
    id?: string;
    email: string;
    username: string;
    displayName?: string | null;
    avatar?: string | null;
    bio?: string | null;
    password: string;
    verified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: ReviewCreateNestedManyWithoutUserInput;
    followers?: FollowCreateNestedManyWithoutFollowerInput;
    following?: FollowCreateNestedManyWithoutFollowingInput;
    likes?: LikeCreateNestedManyWithoutUserInput;
    activities?: ActivityCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutMovieListsInput = {
    id?: string;
    email: string;
    username: string;
    displayName?: string | null;
    avatar?: string | null;
    bio?: string | null;
    password: string;
    verified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput;
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput;
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput;
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput;
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutMovieListsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutMovieListsInput,
      UserUncheckedCreateWithoutMovieListsInput
    >;
  };

  export type MovieListItemCreateWithoutMovieListInput = {
    id?: string;
    notes?: string | null;
    rating?: number | null;
    watchedAt?: Date | string | null;
    addedAt?: Date | string;
    movie: MovieCreateNestedOneWithoutMovieListItemsInput;
  };

  export type MovieListItemUncheckedCreateWithoutMovieListInput = {
    id?: string;
    movieId: string;
    notes?: string | null;
    rating?: number | null;
    watchedAt?: Date | string | null;
    addedAt?: Date | string;
  };

  export type MovieListItemCreateOrConnectWithoutMovieListInput = {
    where: MovieListItemWhereUniqueInput;
    create: XOR<
      MovieListItemCreateWithoutMovieListInput,
      MovieListItemUncheckedCreateWithoutMovieListInput
    >;
  };

  export type MovieListItemCreateManyMovieListInputEnvelope = {
    data:
      | MovieListItemCreateManyMovieListInput
      | MovieListItemCreateManyMovieListInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutMovieListsInput = {
    update: XOR<
      UserUpdateWithoutMovieListsInput,
      UserUncheckedUpdateWithoutMovieListsInput
    >;
    create: XOR<
      UserCreateWithoutMovieListsInput,
      UserUncheckedCreateWithoutMovieListsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutMovieListsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutMovieListsInput,
      UserUncheckedUpdateWithoutMovieListsInput
    >;
  };

  export type UserUpdateWithoutMovieListsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: ReviewUpdateManyWithoutUserNestedInput;
    followers?: FollowUpdateManyWithoutFollowerNestedInput;
    following?: FollowUpdateManyWithoutFollowingNestedInput;
    likes?: LikeUpdateManyWithoutUserNestedInput;
    activities?: ActivityUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutMovieListsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput;
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput;
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type MovieListItemUpsertWithWhereUniqueWithoutMovieListInput = {
    where: MovieListItemWhereUniqueInput;
    update: XOR<
      MovieListItemUpdateWithoutMovieListInput,
      MovieListItemUncheckedUpdateWithoutMovieListInput
    >;
    create: XOR<
      MovieListItemCreateWithoutMovieListInput,
      MovieListItemUncheckedCreateWithoutMovieListInput
    >;
  };

  export type MovieListItemUpdateWithWhereUniqueWithoutMovieListInput = {
    where: MovieListItemWhereUniqueInput;
    data: XOR<
      MovieListItemUpdateWithoutMovieListInput,
      MovieListItemUncheckedUpdateWithoutMovieListInput
    >;
  };

  export type MovieListItemUpdateManyWithWhereWithoutMovieListInput = {
    where: MovieListItemScalarWhereInput;
    data: XOR<
      MovieListItemUpdateManyMutationInput,
      MovieListItemUncheckedUpdateManyWithoutMovieListInput
    >;
  };

  export type MovieListCreateWithoutItemsInput = {
    id?: string;
    name: string;
    description?: string | null;
    type: $Enums.MovieListType;
    privacy?: $Enums.PrivacyLevel;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutMovieListsInput;
  };

  export type MovieListUncheckedCreateWithoutItemsInput = {
    id?: string;
    name: string;
    description?: string | null;
    type: $Enums.MovieListType;
    privacy?: $Enums.PrivacyLevel;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MovieListCreateOrConnectWithoutItemsInput = {
    where: MovieListWhereUniqueInput;
    create: XOR<
      MovieListCreateWithoutItemsInput,
      MovieListUncheckedCreateWithoutItemsInput
    >;
  };

  export type MovieCreateWithoutMovieListItemsInput = {
    id?: string;
    tmdbId: number;
    title: string;
    overview?: string | null;
    releaseDate?: Date | string | null;
    runtime?: number | null;
    posterPath?: string | null;
    backdropPath?: string | null;
    voteAverage?: number | null;
    genres?: MovieCreategenresInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: ReviewCreateNestedManyWithoutMovieInput;
    likes?: LikeCreateNestedManyWithoutMovieInput;
  };

  export type MovieUncheckedCreateWithoutMovieListItemsInput = {
    id?: string;
    tmdbId: number;
    title: string;
    overview?: string | null;
    releaseDate?: Date | string | null;
    runtime?: number | null;
    posterPath?: string | null;
    backdropPath?: string | null;
    voteAverage?: number | null;
    genres?: MovieCreategenresInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: ReviewUncheckedCreateNestedManyWithoutMovieInput;
    likes?: LikeUncheckedCreateNestedManyWithoutMovieInput;
  };

  export type MovieCreateOrConnectWithoutMovieListItemsInput = {
    where: MovieWhereUniqueInput;
    create: XOR<
      MovieCreateWithoutMovieListItemsInput,
      MovieUncheckedCreateWithoutMovieListItemsInput
    >;
  };

  export type MovieListUpsertWithoutItemsInput = {
    update: XOR<
      MovieListUpdateWithoutItemsInput,
      MovieListUncheckedUpdateWithoutItemsInput
    >;
    create: XOR<
      MovieListCreateWithoutItemsInput,
      MovieListUncheckedCreateWithoutItemsInput
    >;
    where?: MovieListWhereInput;
  };

  export type MovieListUpdateToOneWithWhereWithoutItemsInput = {
    where?: MovieListWhereInput;
    data: XOR<
      MovieListUpdateWithoutItemsInput,
      MovieListUncheckedUpdateWithoutItemsInput
    >;
  };

  export type MovieListUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumMovieListTypeFieldUpdateOperationsInput | $Enums.MovieListType;
    privacy?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutMovieListsNestedInput;
  };

  export type MovieListUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumMovieListTypeFieldUpdateOperationsInput | $Enums.MovieListType;
    privacy?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MovieUpsertWithoutMovieListItemsInput = {
    update: XOR<
      MovieUpdateWithoutMovieListItemsInput,
      MovieUncheckedUpdateWithoutMovieListItemsInput
    >;
    create: XOR<
      MovieCreateWithoutMovieListItemsInput,
      MovieUncheckedCreateWithoutMovieListItemsInput
    >;
    where?: MovieWhereInput;
  };

  export type MovieUpdateToOneWithWhereWithoutMovieListItemsInput = {
    where?: MovieWhereInput;
    data: XOR<
      MovieUpdateWithoutMovieListItemsInput,
      MovieUncheckedUpdateWithoutMovieListItemsInput
    >;
  };

  export type MovieUpdateWithoutMovieListItemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tmdbId?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    overview?: NullableStringFieldUpdateOperationsInput | string | null;
    releaseDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    runtime?: NullableIntFieldUpdateOperationsInput | number | null;
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null;
    backdropPath?: NullableStringFieldUpdateOperationsInput | string | null;
    voteAverage?: NullableFloatFieldUpdateOperationsInput | number | null;
    genres?: MovieUpdategenresInput | string[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: ReviewUpdateManyWithoutMovieNestedInput;
    likes?: LikeUpdateManyWithoutMovieNestedInput;
  };

  export type MovieUncheckedUpdateWithoutMovieListItemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tmdbId?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    overview?: NullableStringFieldUpdateOperationsInput | string | null;
    releaseDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    runtime?: NullableIntFieldUpdateOperationsInput | number | null;
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null;
    backdropPath?: NullableStringFieldUpdateOperationsInput | string | null;
    voteAverage?: NullableFloatFieldUpdateOperationsInput | number | null;
    genres?: MovieUpdategenresInput | string[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: ReviewUncheckedUpdateManyWithoutMovieNestedInput;
    likes?: LikeUncheckedUpdateManyWithoutMovieNestedInput;
  };

  export type MovieCreateWithoutReviewsInput = {
    id?: string;
    tmdbId: number;
    title: string;
    overview?: string | null;
    releaseDate?: Date | string | null;
    runtime?: number | null;
    posterPath?: string | null;
    backdropPath?: string | null;
    voteAverage?: number | null;
    genres?: MovieCreategenresInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movieListItems?: MovieListItemCreateNestedManyWithoutMovieInput;
    likes?: LikeCreateNestedManyWithoutMovieInput;
  };

  export type MovieUncheckedCreateWithoutReviewsInput = {
    id?: string;
    tmdbId: number;
    title: string;
    overview?: string | null;
    releaseDate?: Date | string | null;
    runtime?: number | null;
    posterPath?: string | null;
    backdropPath?: string | null;
    voteAverage?: number | null;
    genres?: MovieCreategenresInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movieListItems?: MovieListItemUncheckedCreateNestedManyWithoutMovieInput;
    likes?: LikeUncheckedCreateNestedManyWithoutMovieInput;
  };

  export type MovieCreateOrConnectWithoutReviewsInput = {
    where: MovieWhereUniqueInput;
    create: XOR<
      MovieCreateWithoutReviewsInput,
      MovieUncheckedCreateWithoutReviewsInput
    >;
  };

  export type UserCreateWithoutReviewsInput = {
    id?: string;
    email: string;
    username: string;
    displayName?: string | null;
    avatar?: string | null;
    bio?: string | null;
    password: string;
    verified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movieLists?: MovieListCreateNestedManyWithoutUserInput;
    followers?: FollowCreateNestedManyWithoutFollowerInput;
    following?: FollowCreateNestedManyWithoutFollowingInput;
    likes?: LikeCreateNestedManyWithoutUserInput;
    activities?: ActivityCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string;
    email: string;
    username: string;
    displayName?: string | null;
    avatar?: string | null;
    bio?: string | null;
    password: string;
    verified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movieLists?: MovieListUncheckedCreateNestedManyWithoutUserInput;
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput;
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput;
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput;
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutReviewsInput,
      UserUncheckedCreateWithoutReviewsInput
    >;
  };

  export type LikeCreateWithoutReviewInput = {
    id?: string;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutLikesInput;
    movie?: MovieCreateNestedOneWithoutLikesInput;
  };

  export type LikeUncheckedCreateWithoutReviewInput = {
    id?: string;
    userId: string;
    movieId?: string | null;
    createdAt?: Date | string;
  };

  export type LikeCreateOrConnectWithoutReviewInput = {
    where: LikeWhereUniqueInput;
    create: XOR<
      LikeCreateWithoutReviewInput,
      LikeUncheckedCreateWithoutReviewInput
    >;
  };

  export type LikeCreateManyReviewInputEnvelope = {
    data: LikeCreateManyReviewInput | LikeCreateManyReviewInput[];
    skipDuplicates?: boolean;
  };

  export type MovieUpsertWithoutReviewsInput = {
    update: XOR<
      MovieUpdateWithoutReviewsInput,
      MovieUncheckedUpdateWithoutReviewsInput
    >;
    create: XOR<
      MovieCreateWithoutReviewsInput,
      MovieUncheckedCreateWithoutReviewsInput
    >;
    where?: MovieWhereInput;
  };

  export type MovieUpdateToOneWithWhereWithoutReviewsInput = {
    where?: MovieWhereInput;
    data: XOR<
      MovieUpdateWithoutReviewsInput,
      MovieUncheckedUpdateWithoutReviewsInput
    >;
  };

  export type MovieUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tmdbId?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    overview?: NullableStringFieldUpdateOperationsInput | string | null;
    releaseDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    runtime?: NullableIntFieldUpdateOperationsInput | number | null;
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null;
    backdropPath?: NullableStringFieldUpdateOperationsInput | string | null;
    voteAverage?: NullableFloatFieldUpdateOperationsInput | number | null;
    genres?: MovieUpdategenresInput | string[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movieListItems?: MovieListItemUpdateManyWithoutMovieNestedInput;
    likes?: LikeUpdateManyWithoutMovieNestedInput;
  };

  export type MovieUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tmdbId?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    overview?: NullableStringFieldUpdateOperationsInput | string | null;
    releaseDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    runtime?: NullableIntFieldUpdateOperationsInput | number | null;
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null;
    backdropPath?: NullableStringFieldUpdateOperationsInput | string | null;
    voteAverage?: NullableFloatFieldUpdateOperationsInput | number | null;
    genres?: MovieUpdategenresInput | string[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movieListItems?: MovieListItemUncheckedUpdateManyWithoutMovieNestedInput;
    likes?: LikeUncheckedUpdateManyWithoutMovieNestedInput;
  };

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<
      UserUpdateWithoutReviewsInput,
      UserUncheckedUpdateWithoutReviewsInput
    >;
    create: XOR<
      UserCreateWithoutReviewsInput,
      UserUncheckedCreateWithoutReviewsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutReviewsInput,
      UserUncheckedUpdateWithoutReviewsInput
    >;
  };

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movieLists?: MovieListUpdateManyWithoutUserNestedInput;
    followers?: FollowUpdateManyWithoutFollowerNestedInput;
    following?: FollowUpdateManyWithoutFollowingNestedInput;
    likes?: LikeUpdateManyWithoutUserNestedInput;
    activities?: ActivityUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movieLists?: MovieListUncheckedUpdateManyWithoutUserNestedInput;
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput;
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type LikeUpsertWithWhereUniqueWithoutReviewInput = {
    where: LikeWhereUniqueInput;
    update: XOR<
      LikeUpdateWithoutReviewInput,
      LikeUncheckedUpdateWithoutReviewInput
    >;
    create: XOR<
      LikeCreateWithoutReviewInput,
      LikeUncheckedCreateWithoutReviewInput
    >;
  };

  export type LikeUpdateWithWhereUniqueWithoutReviewInput = {
    where: LikeWhereUniqueInput;
    data: XOR<
      LikeUpdateWithoutReviewInput,
      LikeUncheckedUpdateWithoutReviewInput
    >;
  };

  export type LikeUpdateManyWithWhereWithoutReviewInput = {
    where: LikeScalarWhereInput;
    data: XOR<
      LikeUpdateManyMutationInput,
      LikeUncheckedUpdateManyWithoutReviewInput
    >;
  };

  export type UserCreateWithoutFollowersInput = {
    id?: string;
    email: string;
    username: string;
    displayName?: string | null;
    avatar?: string | null;
    bio?: string | null;
    password: string;
    verified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movieLists?: MovieListCreateNestedManyWithoutUserInput;
    reviews?: ReviewCreateNestedManyWithoutUserInput;
    following?: FollowCreateNestedManyWithoutFollowingInput;
    likes?: LikeCreateNestedManyWithoutUserInput;
    activities?: ActivityCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutFollowersInput = {
    id?: string;
    email: string;
    username: string;
    displayName?: string | null;
    avatar?: string | null;
    bio?: string | null;
    password: string;
    verified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movieLists?: MovieListUncheckedCreateNestedManyWithoutUserInput;
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput;
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput;
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput;
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutFollowersInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutFollowersInput,
      UserUncheckedCreateWithoutFollowersInput
    >;
  };

  export type UserCreateWithoutFollowingInput = {
    id?: string;
    email: string;
    username: string;
    displayName?: string | null;
    avatar?: string | null;
    bio?: string | null;
    password: string;
    verified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movieLists?: MovieListCreateNestedManyWithoutUserInput;
    reviews?: ReviewCreateNestedManyWithoutUserInput;
    followers?: FollowCreateNestedManyWithoutFollowerInput;
    likes?: LikeCreateNestedManyWithoutUserInput;
    activities?: ActivityCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutFollowingInput = {
    id?: string;
    email: string;
    username: string;
    displayName?: string | null;
    avatar?: string | null;
    bio?: string | null;
    password: string;
    verified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movieLists?: MovieListUncheckedCreateNestedManyWithoutUserInput;
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput;
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput;
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput;
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutFollowingInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutFollowingInput,
      UserUncheckedCreateWithoutFollowingInput
    >;
  };

  export type UserUpsertWithoutFollowersInput = {
    update: XOR<
      UserUpdateWithoutFollowersInput,
      UserUncheckedUpdateWithoutFollowersInput
    >;
    create: XOR<
      UserCreateWithoutFollowersInput,
      UserUncheckedCreateWithoutFollowersInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutFollowersInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutFollowersInput,
      UserUncheckedUpdateWithoutFollowersInput
    >;
  };

  export type UserUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movieLists?: MovieListUpdateManyWithoutUserNestedInput;
    reviews?: ReviewUpdateManyWithoutUserNestedInput;
    following?: FollowUpdateManyWithoutFollowingNestedInput;
    likes?: LikeUpdateManyWithoutUserNestedInput;
    activities?: ActivityUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movieLists?: MovieListUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput;
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput;
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserUpsertWithoutFollowingInput = {
    update: XOR<
      UserUpdateWithoutFollowingInput,
      UserUncheckedUpdateWithoutFollowingInput
    >;
    create: XOR<
      UserCreateWithoutFollowingInput,
      UserUncheckedCreateWithoutFollowingInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutFollowingInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutFollowingInput,
      UserUncheckedUpdateWithoutFollowingInput
    >;
  };

  export type UserUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movieLists?: MovieListUpdateManyWithoutUserNestedInput;
    reviews?: ReviewUpdateManyWithoutUserNestedInput;
    followers?: FollowUpdateManyWithoutFollowerNestedInput;
    likes?: LikeUpdateManyWithoutUserNestedInput;
    activities?: ActivityUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movieLists?: MovieListUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput;
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput;
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutLikesInput = {
    id?: string;
    email: string;
    username: string;
    displayName?: string | null;
    avatar?: string | null;
    bio?: string | null;
    password: string;
    verified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movieLists?: MovieListCreateNestedManyWithoutUserInput;
    reviews?: ReviewCreateNestedManyWithoutUserInput;
    followers?: FollowCreateNestedManyWithoutFollowerInput;
    following?: FollowCreateNestedManyWithoutFollowingInput;
    activities?: ActivityCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: string;
    email: string;
    username: string;
    displayName?: string | null;
    avatar?: string | null;
    bio?: string | null;
    password: string;
    verified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movieLists?: MovieListUncheckedCreateNestedManyWithoutUserInput;
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput;
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput;
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput;
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutLikesInput,
      UserUncheckedCreateWithoutLikesInput
    >;
  };

  export type MovieCreateWithoutLikesInput = {
    id?: string;
    tmdbId: number;
    title: string;
    overview?: string | null;
    releaseDate?: Date | string | null;
    runtime?: number | null;
    posterPath?: string | null;
    backdropPath?: string | null;
    voteAverage?: number | null;
    genres?: MovieCreategenresInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movieListItems?: MovieListItemCreateNestedManyWithoutMovieInput;
    reviews?: ReviewCreateNestedManyWithoutMovieInput;
  };

  export type MovieUncheckedCreateWithoutLikesInput = {
    id?: string;
    tmdbId: number;
    title: string;
    overview?: string | null;
    releaseDate?: Date | string | null;
    runtime?: number | null;
    posterPath?: string | null;
    backdropPath?: string | null;
    voteAverage?: number | null;
    genres?: MovieCreategenresInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movieListItems?: MovieListItemUncheckedCreateNestedManyWithoutMovieInput;
    reviews?: ReviewUncheckedCreateNestedManyWithoutMovieInput;
  };

  export type MovieCreateOrConnectWithoutLikesInput = {
    where: MovieWhereUniqueInput;
    create: XOR<
      MovieCreateWithoutLikesInput,
      MovieUncheckedCreateWithoutLikesInput
    >;
  };

  export type ReviewCreateWithoutLikesInput = {
    id?: string;
    content: string;
    rating: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movie: MovieCreateNestedOneWithoutReviewsInput;
    user: UserCreateNestedOneWithoutReviewsInput;
  };

  export type ReviewUncheckedCreateWithoutLikesInput = {
    id?: string;
    content: string;
    rating: number;
    movieId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ReviewCreateOrConnectWithoutLikesInput = {
    where: ReviewWhereUniqueInput;
    create: XOR<
      ReviewCreateWithoutLikesInput,
      ReviewUncheckedCreateWithoutLikesInput
    >;
  };

  export type UserUpsertWithoutLikesInput = {
    update: XOR<
      UserUpdateWithoutLikesInput,
      UserUncheckedUpdateWithoutLikesInput
    >;
    create: XOR<
      UserCreateWithoutLikesInput,
      UserUncheckedCreateWithoutLikesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutLikesInput,
      UserUncheckedUpdateWithoutLikesInput
    >;
  };

  export type UserUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movieLists?: MovieListUpdateManyWithoutUserNestedInput;
    reviews?: ReviewUpdateManyWithoutUserNestedInput;
    followers?: FollowUpdateManyWithoutFollowerNestedInput;
    following?: FollowUpdateManyWithoutFollowingNestedInput;
    activities?: ActivityUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movieLists?: MovieListUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput;
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type MovieUpsertWithoutLikesInput = {
    update: XOR<
      MovieUpdateWithoutLikesInput,
      MovieUncheckedUpdateWithoutLikesInput
    >;
    create: XOR<
      MovieCreateWithoutLikesInput,
      MovieUncheckedCreateWithoutLikesInput
    >;
    where?: MovieWhereInput;
  };

  export type MovieUpdateToOneWithWhereWithoutLikesInput = {
    where?: MovieWhereInput;
    data: XOR<
      MovieUpdateWithoutLikesInput,
      MovieUncheckedUpdateWithoutLikesInput
    >;
  };

  export type MovieUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tmdbId?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    overview?: NullableStringFieldUpdateOperationsInput | string | null;
    releaseDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    runtime?: NullableIntFieldUpdateOperationsInput | number | null;
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null;
    backdropPath?: NullableStringFieldUpdateOperationsInput | string | null;
    voteAverage?: NullableFloatFieldUpdateOperationsInput | number | null;
    genres?: MovieUpdategenresInput | string[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movieListItems?: MovieListItemUpdateManyWithoutMovieNestedInput;
    reviews?: ReviewUpdateManyWithoutMovieNestedInput;
  };

  export type MovieUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tmdbId?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    overview?: NullableStringFieldUpdateOperationsInput | string | null;
    releaseDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    runtime?: NullableIntFieldUpdateOperationsInput | number | null;
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null;
    backdropPath?: NullableStringFieldUpdateOperationsInput | string | null;
    voteAverage?: NullableFloatFieldUpdateOperationsInput | number | null;
    genres?: MovieUpdategenresInput | string[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movieListItems?: MovieListItemUncheckedUpdateManyWithoutMovieNestedInput;
    reviews?: ReviewUncheckedUpdateManyWithoutMovieNestedInput;
  };

  export type ReviewUpsertWithoutLikesInput = {
    update: XOR<
      ReviewUpdateWithoutLikesInput,
      ReviewUncheckedUpdateWithoutLikesInput
    >;
    create: XOR<
      ReviewCreateWithoutLikesInput,
      ReviewUncheckedCreateWithoutLikesInput
    >;
    where?: ReviewWhereInput;
  };

  export type ReviewUpdateToOneWithWhereWithoutLikesInput = {
    where?: ReviewWhereInput;
    data: XOR<
      ReviewUpdateWithoutLikesInput,
      ReviewUncheckedUpdateWithoutLikesInput
    >;
  };

  export type ReviewUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie?: MovieUpdateOneRequiredWithoutReviewsNestedInput;
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput;
  };

  export type ReviewUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    movieId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserCreateWithoutActivitiesInput = {
    id?: string;
    email: string;
    username: string;
    displayName?: string | null;
    avatar?: string | null;
    bio?: string | null;
    password: string;
    verified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movieLists?: MovieListCreateNestedManyWithoutUserInput;
    reviews?: ReviewCreateNestedManyWithoutUserInput;
    followers?: FollowCreateNestedManyWithoutFollowerInput;
    following?: FollowCreateNestedManyWithoutFollowingInput;
    likes?: LikeCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutActivitiesInput = {
    id?: string;
    email: string;
    username: string;
    displayName?: string | null;
    avatar?: string | null;
    bio?: string | null;
    password: string;
    verified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movieLists?: MovieListUncheckedCreateNestedManyWithoutUserInput;
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput;
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput;
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput;
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutActivitiesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutActivitiesInput,
      UserUncheckedCreateWithoutActivitiesInput
    >;
  };

  export type UserUpsertWithoutActivitiesInput = {
    update: XOR<
      UserUpdateWithoutActivitiesInput,
      UserUncheckedUpdateWithoutActivitiesInput
    >;
    create: XOR<
      UserCreateWithoutActivitiesInput,
      UserUncheckedCreateWithoutActivitiesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutActivitiesInput,
      UserUncheckedUpdateWithoutActivitiesInput
    >;
  };

  export type UserUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movieLists?: MovieListUpdateManyWithoutUserNestedInput;
    reviews?: ReviewUpdateManyWithoutUserNestedInput;
    followers?: FollowUpdateManyWithoutFollowerNestedInput;
    following?: FollowUpdateManyWithoutFollowingNestedInput;
    likes?: LikeUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movieLists?: MovieListUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput;
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type MovieListCreateManyUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    type: $Enums.MovieListType;
    privacy?: $Enums.PrivacyLevel;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ReviewCreateManyUserInput = {
    id?: string;
    content: string;
    rating: number;
    movieId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type FollowCreateManyFollowerInput = {
    id?: string;
    followingId: string;
    createdAt?: Date | string;
  };

  export type FollowCreateManyFollowingInput = {
    id?: string;
    followerId: string;
    createdAt?: Date | string;
  };

  export type LikeCreateManyUserInput = {
    id?: string;
    movieId?: string | null;
    reviewId?: string | null;
    createdAt?: Date | string;
  };

  export type ActivityCreateManyUserInput = {
    id?: string;
    type: $Enums.ActivityType;
    data: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
  };

  export type MovieListUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumMovieListTypeFieldUpdateOperationsInput | $Enums.MovieListType;
    privacy?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    items?: MovieListItemUpdateManyWithoutMovieListNestedInput;
  };

  export type MovieListUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumMovieListTypeFieldUpdateOperationsInput | $Enums.MovieListType;
    privacy?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    items?: MovieListItemUncheckedUpdateManyWithoutMovieListNestedInput;
  };

  export type MovieListUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumMovieListTypeFieldUpdateOperationsInput | $Enums.MovieListType;
    privacy?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie?: MovieUpdateOneRequiredWithoutReviewsNestedInput;
    likes?: LikeUpdateManyWithoutReviewNestedInput;
  };

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    movieId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    likes?: LikeUncheckedUpdateManyWithoutReviewNestedInput;
  };

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    movieId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FollowUpdateWithoutFollowerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    following?: UserUpdateOneRequiredWithoutFollowingNestedInput;
  };

  export type FollowUncheckedUpdateWithoutFollowerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    followingId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FollowUncheckedUpdateManyWithoutFollowerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    followingId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FollowUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    follower?: UserUpdateOneRequiredWithoutFollowersNestedInput;
  };

  export type FollowUncheckedUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    followerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FollowUncheckedUpdateManyWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    followerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie?: MovieUpdateOneWithoutLikesNestedInput;
    review?: ReviewUpdateOneWithoutLikesNestedInput;
  };

  export type LikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    movieId?: NullableStringFieldUpdateOperationsInput | string | null;
    reviewId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    movieId?: NullableStringFieldUpdateOperationsInput | string | null;
    reviewId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ActivityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    data?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ActivityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    data?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ActivityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    data?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MovieListItemCreateManyMovieInput = {
    id?: string;
    movieListId: string;
    notes?: string | null;
    rating?: number | null;
    watchedAt?: Date | string | null;
    addedAt?: Date | string;
  };

  export type ReviewCreateManyMovieInput = {
    id?: string;
    content: string;
    rating: number;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type LikeCreateManyMovieInput = {
    id?: string;
    userId: string;
    reviewId?: string | null;
    createdAt?: Date | string;
  };

  export type MovieListItemUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    watchedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movieList?: MovieListUpdateOneRequiredWithoutItemsNestedInput;
  };

  export type MovieListItemUncheckedUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    movieListId?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    watchedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MovieListItemUncheckedUpdateManyWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    movieListId?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    watchedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput;
    likes?: LikeUpdateManyWithoutReviewNestedInput;
  };

  export type ReviewUncheckedUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    likes?: LikeUncheckedUpdateManyWithoutReviewNestedInput;
  };

  export type ReviewUncheckedUpdateManyWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LikeUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutLikesNestedInput;
    review?: ReviewUpdateOneWithoutLikesNestedInput;
  };

  export type LikeUncheckedUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    reviewId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LikeUncheckedUpdateManyWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    reviewId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MovieListItemCreateManyMovieListInput = {
    id?: string;
    movieId: string;
    notes?: string | null;
    rating?: number | null;
    watchedAt?: Date | string | null;
    addedAt?: Date | string;
  };

  export type MovieListItemUpdateWithoutMovieListInput = {
    id?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    watchedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie?: MovieUpdateOneRequiredWithoutMovieListItemsNestedInput;
  };

  export type MovieListItemUncheckedUpdateWithoutMovieListInput = {
    id?: StringFieldUpdateOperationsInput | string;
    movieId?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    watchedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MovieListItemUncheckedUpdateManyWithoutMovieListInput = {
    id?: StringFieldUpdateOperationsInput | string;
    movieId?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    watchedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LikeCreateManyReviewInput = {
    id?: string;
    userId: string;
    movieId?: string | null;
    createdAt?: Date | string;
  };

  export type LikeUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutLikesNestedInput;
    movie?: MovieUpdateOneWithoutLikesNestedInput;
  };

  export type LikeUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    movieId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LikeUncheckedUpdateManyWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    movieId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use MovieCountOutputTypeDefaultArgs instead
   */
  export type MovieCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = MovieCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use MovieListCountOutputTypeDefaultArgs instead
   */
  export type MovieListCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = MovieListCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ReviewCountOutputTypeDefaultArgs instead
   */
  export type ReviewCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = ReviewCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserDefaultArgs instead
   */
  export type UserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = UserDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use MovieDefaultArgs instead
   */
  export type MovieArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = MovieDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use MovieListDefaultArgs instead
   */
  export type MovieListArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = MovieListDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use MovieListItemDefaultArgs instead
   */
  export type MovieListItemArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = MovieListItemDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ReviewDefaultArgs instead
   */
  export type ReviewArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = ReviewDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use FollowDefaultArgs instead
   */
  export type FollowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = FollowDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use LikeDefaultArgs instead
   */
  export type LikeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = LikeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ActivityDefaultArgs instead
   */
  export type ActivityArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = ActivityDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
