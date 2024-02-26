export class Event {

  idEvent!: number;
  name!: string;
  description!: string;
  banner!: string;
  date!: Date;
  category!: EventCategory;
  location!: string;
  price!: number;
  status!: EventStatus;
  createdAt!: Date;
  updatedAt!: Date;
  users!: User[];


}

export enum EventCategory {
  ENTERTAINMENT = 'ENTERTAINMENT',
  OUTDOOR_ACTIVITIES = 'OUTDOOR_ACTIVITIES',
  HEALTH_CHECKUP = 'HEALTH_CHECKUP',
  SOCIAL_GATHERING = 'SOCIAL_GATHERING'
}

export enum EventStatus {
  APPROVED = 'APPROVED',
  PENDING = 'PENDING'
}

export class User {
  // Define the User class if not already done
}
