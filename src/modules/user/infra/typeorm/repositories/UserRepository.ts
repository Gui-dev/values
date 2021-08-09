import { EntityRepository, Repository } from 'typeorm'

import { User } from '@modules/user/infra/typeorm/entities/User'

@EntityRepository(User)
export class UserRepository extends Repository<User> {

}
