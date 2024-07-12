class Entity {
    protected id: number;
    title: string;
    creationDate: Date;
    constructor(title: string = "") {
        this.title = title
        this.id = Math.floor(Math.random() * 1000)
        this.creationDate = new Date()
    }
    getId(): string {
        return `the Id is: ${this.id}`
    }
    getTitle(): string {
        return this.title
    }
    getCreationDate(): Date {
        return this.creationDate
    }

    setTitle(title: string): void {
        this.title = title
    }

}
const entityOne = new Entity('bla')

console.log(entityOne.getId())
// entityOne.id = 100;
// console.log(entityOne.id)
entityOne.setTitle("asdasd");

const entityTow = new Entity("Entitiy 2");

const entityThree = new Entity();

const arr = new Array(4)
const arr2 = new Array() //[]
const str = new String();
