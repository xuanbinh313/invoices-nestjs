import { BaseEntity } from "src/common/base.entity";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Account extends BaseEntity{
    @PrimaryGeneratedColumn({ name: 'account_id' })
    id: number;

    @Column({ name: 'company_name' })
    companyName: string;

    @Column()
    ownerName: string;

    @Column({ name: 'owner_email' })
    ownerEmail: string

    @Column()
    country: string

    @Column()
    address: string

    @Column()
    phone: string

    @Column()
    logo: string

    @Column()
    email: string;
    
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date
}