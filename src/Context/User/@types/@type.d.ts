interface IUserContext {
  userID: string;
  isLoading: boolean;
  login: (ID: string) => void;
  getUserID: () => void;
  logout: () => void;
}
