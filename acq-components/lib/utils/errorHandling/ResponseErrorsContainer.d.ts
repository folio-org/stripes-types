import { ResponseErrorContainer } from './ResponseErrorContainer';

export interface ResponseErrorsContainerBody {
  errors: unknown[];
  // eslint-disable-next-line camelcase
  total_records: number;
}

export interface ErrorHandlingStrategy {
  handle(errors: ResponseErrorsContainer): void;
}

/**
 * @class
 * @description Container for response errors.
 */
export class ResponseErrorsContainer {
  originalResponseBody: unknown;
  originalResponse?: Response;
  totalRecords: number;
  errorsMap: Map<string, ResponseErrorContainer>;

  /**
   * @private
   * @description Create a new instance of ResponseErrorsContainer. Instances are supposed to be created via the static create method.
   */
  private constructor(responseBody: ResponseErrorsContainerBody, response?: Response);

  /**
   * @static
   * @description Create a new instance of ResponseErrorsContainer.
   */
  static create(response: Response): Promise<{ handler: ResponseErrorsContainer }>;

  /**
   * @description Handle the errors using a given strategy.
   */
  handle(strategy: ErrorHandlingStrategy): any | Promise<any>;

  /**
   * @description Get the status of the response.
   */
  get status(): number | undefined;

  /**
   * @description Get an array of error messages.
   */
  get errorMessages(): Array<string | undefined>;

  /**
   * @description Get an array of error codes.
   */
  get errorCodes(): Array<string | undefined>;

  /**
   * @description Get all errors as an array.
   */
  get errors(): ResponseErrorContainer[];

  /**
   * @description Get all errors as a map.
   */
  getErrors(): Map<string, ResponseErrorContainer>;

  /**
   * @description Get a specific error by its code or the first error if no code is provided.
   */
  getError(code?: string): ResponseErrorContainer;

  /**
   * @private
   * @description Normalize an unknown error into a structured ResponseErrorContainer.
   */
  private getStructuredError(error: unknown): ResponseErrorContainer;
}
