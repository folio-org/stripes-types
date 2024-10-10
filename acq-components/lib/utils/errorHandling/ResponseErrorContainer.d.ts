export interface ResponseErrorParameter {
  key: string;
  value: string;
}

export interface ResponseError {
  message?: string;
  code?: string;
  type?: string;
  parameters?: ResponseErrorParameter[];
}

/**
 * @class
 * @description Container for response error.
 */
export class ResponseErrorContainer {
  constructor(error?: ResponseError);

  /**
   * @description Get the error message.
   */
  get message(): string | undefined;

  /**
   * @description Get the error code.
   */
  get code(): string | undefined;

  /**
   * @description Get the error type.
   */
  get type(): string | undefined;

  /**
   * @description Get the error parameters.
   */
  get parameters(): ResponseErrorParameter[] | undefined;

  /**
   * @description Get the error parameters as a map.
   */
  getParameters(): Map<string, ResponseErrorParameter>;

  /**
   * @description Get a specific parameter by its key.
   */
  getParameter(key: string): string | undefined;
}
