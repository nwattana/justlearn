import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Product'})
export class ProductEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        name: 'title',
        type: 'text',
        nullable: false,
    })
    title: string;

    @Column({
        type: "money",
        nullable: false,
        default: 0,
    })
    price: number
}