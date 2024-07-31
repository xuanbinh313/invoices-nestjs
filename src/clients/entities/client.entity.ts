import { BaseEntity } from "src/common/base.entity"
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Client extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'client_id' })
    id: number

    @Column({ name: 'owner_name' })
    ownerName: string

    @Column({ name: 'owner_email' })
    ownerEmail: string

    @Column()
    name: string

    @Column()
    country: string

    @Column()
    address: string

    @Column()
    phone: string

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date
}