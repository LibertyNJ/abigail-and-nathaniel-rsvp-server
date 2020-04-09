import { Request, Response } from 'express';

import Guest from '../models/Guest';

const get = async (req: Request, res: Response) => {
  const rsvpCode = req.body.code;
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
    res.status(404).send(`No guests found for RSVP code "${rsvpCode}".`);
  }
};

type GuestDatum = {
  id: string;
  entree: string;
  isAttendingRehearsalDinner?: boolean;
  isAttendingWedding: boolean;
  name: string;
  title: string;
};

const post = (req: Request, res: Response) => {
  const guestData: GuestDatum[] = req.body;

  guestData.forEach(async (guestDatum) => {
    await Guest.update(
      { _id: guestDatum.id },
      {
        entree: guestDatum.entree,
        isAttendingRehearsalDinner: guestDatum.isAttendingRehearsalDinner,
        isAttendingWedding: guestDatum.isAttendingWedding,
        name: guestDatum.name,
        title: guestDatum.title,
      }
    );
  });

  res.status(200).send('Guest data updated.');
};

export default {
  get,
  post,
};
