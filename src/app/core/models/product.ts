export class Product{
  constructor(
    public _id?: string,
    public title?: string,
    public price?: number,
    public about?: {
      all?: string,
      short?: string
    },
    public colors?: string[],
    public photos?: any[],
    public quantity?: number,
    public date?: {
      type: string,
    },
    public gender?: string,
    public category?: string,
    public producer?: string,
    public show?: boolean,
    public sale?: boolean
  )
  {}
}
