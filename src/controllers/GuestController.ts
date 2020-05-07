import { NextFunction, Request, Response } from 'express';

import guestService, { GuestService } from '../services/GuestService';

export type Guest = {
  _id: string;
  accommodations?: string;
  entree?: string;
  isAttendingRehearsalDinner?: boolean;
  isAttendingWedding?: boolean;
  isInvitedToRehearsalDinner?: boolean;
  name?: string;
  rsvpCode?: string;
  title?: string;
};

export class GuestController {
  private service: GuestService;

  constructor(service: GuestService) {
    this.service = service;
    this.getGuests = this.getGuests.bind(this);
    this.updateGuests = this.updateGuests.bind(this);
  }

  async getGuests(req: Request, res: Response, next: NextFunction) {
    try {
      const { query } = req;
      const guests = await this.service.getGuests(query);
      res.status(200).json(guests);
    } catch (error) {
      next(error);
    }
  }

  async updateGuests(req: Request, res: Response, next: NextFunction) {
    try {
      const guests: Guest[] = req.body;

      guests.forEach(async (guest: Guest) => {
        const {
          _id,
          accommodations,
          entree,
          isAttendingRehearsalDinner,
          isAttendingWedding,
          name,
          title,
        } = guest;

        const data = {
          accommodations,
          entree,
          isAttendingRehearsalDinner,
          isAttendingWedding,
          name,
          title,
        };

        await this.service.updateGuest(_id, data);
      });

      res.status(200).json('Guests updated.');
    } catch (error) {
      next(error);
    }
  }
}

export default new GuestController(guestService);
