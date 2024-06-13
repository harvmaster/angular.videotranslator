export type User = {
  id: string;
  email: string;
  auth: {
    accessToken: string;
  };
}