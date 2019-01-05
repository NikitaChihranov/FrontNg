export class Comment {
  constructor (
    public _id: string,
    public date?: any,
    public text?: string,
    public user?: string,
    public product?: string
  )
  {
  }
}
