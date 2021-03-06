/**
 * @flow
 * @file Hex Conversion from Byte Array
 * @author Box
 */

/**
 * Converts an array buffer to Hex
 * 
 * @param {Uint8Array} arrayBuffer The buffer to convert
 * @return {string} The hex converted value
 */
function bufferToHex(arrayBuffer: Uint8Array): string {
    // eslint-disable-next-line no-bitwise
    return Array.from(arrayBuffer, (byte) => `0${(byte & 0xff).toString(16)}`.slice(-2)).join('');
}

// eslint-disable-next-line import/prefer-default-export
export { bufferToHex };
