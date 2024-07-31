import { Account } from "src/accounts/entities/account.entity"
import { BaseEntity } from "src/common/base.entity"
import { Role } from "src/common/role.enum"
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'user_id' })
    id: string

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    email: string

    @Column()
    fullName: string

    @Column({
        type: 'enum',
        enum: Role,
        array: true,
        default: [Role.USER]
    })
    roles: Role[]
    
    @ManyToOne(() => Account)
    account: Account

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date
}
