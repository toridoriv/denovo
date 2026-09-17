declare global {
  interface JSON {
    /**
     * Converts a JavaScript Object Notation (JSON) string into an object.
     * @param text A valid JSON string.
     * @param reviver A function that transforms the results. This function is called for each member of the object.
     * If a member contains nested objects, the nested objects are transformed before the parent object is.
     * @throws {SyntaxError} If `text` is not valid JSON.
     */
    parse(
      text: string | null,
      reviver?: (this: any, key: string, value: any) => any,
    ): any;
  }

  type NotNUllish<T> = Exclude<T, undefined | null>;
}

export {};
