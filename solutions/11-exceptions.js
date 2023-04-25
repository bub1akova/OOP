export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

// BEGIN
export function parseJson(str) {
  try {
    return JSON.parse(str)
  } catch (error) {
    throw new ParseError('Invalid JSON string')
  }
}
// END
