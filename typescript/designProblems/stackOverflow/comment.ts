import { user } from "./user";
export class comment {
    // Add your class implementation here
    private static idCounter = 1;
  public readonly id: number;
  public content: string;
  public author: user;
  public creationDate: Date;

  constructor(content: string, author: user) {
    this.id = comment.idCounter++;
    this.content = content;
    this.author = author;
    this.creationDate = new Date();
  }

}