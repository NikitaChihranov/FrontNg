export class Product {
  constructor(
    public _id?: string,
    public title?: string,
    public userIdAuthor?: string,
    public price?: number,
    public about?: {
      all?: string,
      short?: string
    },
    public colors?: string,
    public photos?: string[],
    public quantity?: number,
    public date?: any,
    public category?: string,
    public producer?: string,
  )
  {

  }
}
