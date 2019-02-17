export class Order {
  constructor(
    public _id: string,
    public userId: string,
    public product?: string,
    public date?: any,
    public name?: string,
    public surname?: string,
    public addressDelivery?: string,
    public phoneNumber?: string,
    public details?: string,
    public paymentType?: string,
    public totalPrice?: number
  )
  {

  }
}
