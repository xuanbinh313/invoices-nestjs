import { Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

export abstract class BaseEntity {

    
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date
}