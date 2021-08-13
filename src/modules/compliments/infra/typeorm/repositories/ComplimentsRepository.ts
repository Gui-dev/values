import { EntityRepository, Repository } from 'typeorm'
import { Compliment } from '@modules/compliments/infra/typeorm/entities/Compliment'

@EntityRepository(Compliment)
export class ComplimentsRepository extends Repository<Compliment> {}
