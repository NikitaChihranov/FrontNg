export class Order {
  constructor(
    public _id: string,
    public product: string,
    public date?: string,
    public name?: string,
    public surname?: string,
    public delivery?: {
      address?: string,
      phone?: string,
      price?: number
    },
    public details?: string,
    public paymentType?: string,
    public totalPrice?: number
  )
  {

  }
}
