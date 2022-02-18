
/**
 * 
 * Remove todos os caracteres de uma string que não sejam numerais
 */
export const clearNonNumber = (value: string) => value.replace(/[^0-9]/g, '');