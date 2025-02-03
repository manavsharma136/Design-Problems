export class tag{
    private static idCounter = 1;
    public readonly id: number;
    public name: string;
  
    constructor(name: string) {
      this.id = tag.idCounter++;
      this.name = name;
    }
  
}