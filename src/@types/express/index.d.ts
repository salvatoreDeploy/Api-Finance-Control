declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
    categories: {
      id: string;
    };
  }
}
