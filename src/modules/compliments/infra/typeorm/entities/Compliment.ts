import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

import { User } from '@modules/user/infra/typeorm/entities/User'
import { Tag } from '@modules/tag/infra/typeorm/entities/Tag'

@Entity('compliments')
export class Compliment {
  @PrimaryColumn()
  public readonly id: string

  @Column()
  public user_sender: string

  @JoinColumn({ name: 'user_sender' })
  @ManyToOne(() => User)
  public userSender: User

  @Column()
  public user_receiver: string

  @JoinColumn({ name: 'user_receiver' })
  @ManyToOne(() => User)
  public userReceiver: User

  @Column()
  public tag_id: string

  @JoinColumn({ name: 'tag_id' })
  @ManyToOne(() => Tag)
  public tag: Tag

  @Column()
  public message: string

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
