import { Request, Response } from 'express';

import Guest, { GuestDocument } from '../models/Guest';

const get = async (req: Request, res: Response) => {
  const rsvpCode = req.params.code;

  if (/^[A-Z0-9]{6}$/.test(rsvpCode)) {
    try {
      const guests = await Guest.find({ rsvpCode });

      if (guests.length > 0) {
        const result = guests.map((guest) => ({
          id: guest.id,
          entree: guest.entree,
          isAttendingRehearsalDinner: guest.isAttendingRehearsalDinner,
          isAttendingWedding: guest.isAttendingWedding,
          isInvitedToRehearsalDinner: guest.isInvitedToRehearsalDinner,
          name: guest.name,
          title: guest.title,
        }));

        res.status(200).send(result);
      } else {
        res
          .status(404)
          .send(
            `No guests found for RSVP code "${rsvpCode}". Please check your RSVP code and try again.`
          );
      }
    } catch (error) {
      res
        .status(500)
        .send('The server encountered an unexpected error. Please try again.');
    }
  } else {
    res.status(400).send('Received an invalid RSVP code.');
  }
};

const post = (req: Request, res: Response) => {
  const guests: GuestDocument[] = req.body;

  if (Array.isArray(guests) && guests.length > 0) {
    try {
      guests.forEach(async (guest) => {
        await Guest.updateOne(
          { _id: guest.id },
          {
            entree: guest.entree,
            isAttendingRehearsalDinner: guest.isAttendingRehearsalDinner,
            isAttendingWedding: guest.isAttendingWedding,
            name: guest.name,
            title: guest.title,
          }
        );
      });

      const pluralityAppendant = guests.length > 1 ? 's' : '';

      res
        .status(200)
        .send(`Guest${pluralityAppendant} updated. Thank you for your RSVP!`);
    } catch (error) {
      res.status(500).send('Something went wrong. Please try again.');
    }
  } else {
    res.status(400).send('Received invalid guest data.');
  }
};

export default {
  get,
  post,
};
