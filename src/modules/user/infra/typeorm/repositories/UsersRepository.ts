import { EntityRepository, Repository } from 'typeorm'

import { User } from '@modules/user/infra/typeorm/entities/User'

@EntityRepository(User)
export class UsersRepository extends Repository<User> {}
