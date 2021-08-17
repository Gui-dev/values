import { Expose } from 'class-transformer'
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('tags')
export class Tag {
  @PrimaryColumn()
  public readonly id: string

  @Column()
  public name: string

  @CreateDateColumn()
  public created_at: Date

  @UpdateDateColumn()
  public updated_at: Date

  @Expose({name: 'tag_name'})
  public getTagName(): string {
    return `#${this.name}`
  }

  constructor () {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
