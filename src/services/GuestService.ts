import { Model, MongooseFilterQuery } from 'mongoose';

import Guest, { GuestDocument } from '../models/Guest';

export type GuestData = {
  accommodations?: string;
  entree?: string;
  isAttendingRehearsalDinner?: boolean;
  isAttendingWedding?: boolean;
  name?: string;
  title?: string;
};

export class GuestService {
  private model: Model<GuestDocument>;

  constructor(model: Model<GuestDocument>) {
    this.model = model;
  }

  async getGuests(query: MongooseFilterQuery<GuestDocument>) {
    const guests = await this.model.find(query);
    return guests;
  }

  async updateGuest(id: string, data: GuestData) {
    const query = { _id: id };
    const options = { omitUndefined: true };
    await this.model.updateOne(query, data, options);
  }
}

export default new GuestService(Guest);
