export class User {
  constructor(
    public _id?: string,
    public firstName?:   string,
    public surname?: string,
    public phone?: string,
    public email?: string,
    public photo?: string,
    public adress?: string,
    public admin?: boolean
  ) {
  }
}
