export class Comment {
  constructor (
    public _id: string,
    public date?: string,
    public text?: string,
    public user?: string,
    public product?: string
  )
  {
  }
}
