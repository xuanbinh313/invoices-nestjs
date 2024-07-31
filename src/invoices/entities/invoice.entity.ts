import { Account } from "src/accounts/entities/account.entity";
import { Client } from "src/clients/entities/client.entity";
import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Invoice extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'invoice_id' })
    id: number;

    @Column()
    name: string;

    @Column()
    date: string;

    @Column({ type: 'decimal' })
    discount: number;

    @Column({ type: 'decimal' })
    tax: number;

    @Column({ nullable: true })
    customId: string;

    @Column({ type: 'decimal' })
    total: number;

    @Column({ type: 'decimal' })
    subTotal: number;

    // @ManyToOne(() => Service)
    // service: Service;

    @ManyToOne(() => Client)
    client: Client;

    @ManyToOne(() => Account)
    account: Account;
}