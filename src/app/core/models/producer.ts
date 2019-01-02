export class Producer {
  constructor(
    public _id?: string,
    public title?: string,
    public about?: {
      short?: string,
      all?: string
    },
    public photo?: string,
    public country?: string
  )
  {
  }
}
