export class Order {
  constructor(
    public _id: string,
    public products?: Array<string>,
    public date?: string,
    public user?: string,
    public delivery?: {
      address?: string,
      phone?: string
    },
    public details?: string,
    public payment?: string
  )
  {

  }
}
