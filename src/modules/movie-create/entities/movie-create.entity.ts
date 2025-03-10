import { Column, Model, Table } from "sequelize-typescript";

@Table({tableName:"movies_list"})
export class MovieCreateEntity extends Model{
    @Column({allowNull:false})
    name:string
}
