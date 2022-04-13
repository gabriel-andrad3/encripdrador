interface IPasswordsRepository {
  isDecreasingSpecialCase(char: string): Promise<string>;
  treatDecreasingSpecialCase(char: string): Promise<string>;
  isIncreasingSpecialCase(char: string): Promise<string>;
  treatIncreasingSpecialCase(char: string): Promise<string>;
}

export { IPasswordsRepository };