import mongoose from 'mongoose';

export type GuestDocument = mongoose.Document & {
  entree: string;
  isAttendingRehearsalDinner: boolean;
  isAttendingWedding: boolean;
  isInvitedToRehearsalDinner: boolean;
  name: string;
  rsvpCode: string;
  title: string;
};

const GuestSchema = new mongoose.Schema({
  entree: String,
  isAttendingRehearsalDinner: Boolean,
  isAttendingWedding: Boolean,
  isInvitedToRehearsalDinner: Boolean,
  name: String,
  rsvpCode: String,
  title: String,
});

const Guest = mongoose.model<GuestDocument>('Guest', GuestSchema);

export default Guest;
