import {Group} from "./group.model";
import {User} from "./user.model";

export class FundRaisingActivity {
  id?: number
  code?: string
  name?: string
  fundraiserName?: string
  description?: string
  targetAmount?: number
  withdrawalDate?: Date
  targetedEventDate?: Date
  isActive?: boolean
  isPublic?: boolean
  group?: Group
  beneficiary?: string
}
