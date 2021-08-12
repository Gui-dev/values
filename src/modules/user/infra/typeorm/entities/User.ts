import { Entity, Column, CreateDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('users')
export class User {
  @PrimaryColumn()
  public readonly id: string

  @Column()
  public name: string

  @Column()
  public email: string

  @Column()
  public password: string

  @Column()
  public admin: boolean

  @CreateDateColumn()
  public created_at: Date

  @UpdateDateColumn()
  public updated_at: Date

  constructor () {
    if (!this.id) {
      this.id = uuid()
    }
  }

}
