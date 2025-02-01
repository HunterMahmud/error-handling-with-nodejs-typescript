import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    // why i have to call the constructor function to assign the value otherwise its giving the error
    // another way to get rid of error is assigning the default value such as [age:number = 0;]
    // another way to get rid of error is making the field is mandatory using ! mark [age!:number;]
    // another way to get rid of error is make the value of this fiend false which is not recomanded: ["strictPropertyInitialization": false,] or commenting the strict mode

    // constructor(firstName:string, lastName:string, age: number){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.age = age;
    // }

}