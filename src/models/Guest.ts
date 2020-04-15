import mongoose from 'mongoose';

export interface GuestDocument extends mongoose.Document {
  entree?: string;
  isAttendingRehearsalDinner?: boolean;
  isAttendingWedding?: boolean;
  isInvitedToRehearsalDinner: boolean;
  name: string;
  rsvpCode: string;
  title: string;
}

const GuestSchema = new mongoose.Schema(
  {
    entree: {
      enum: ['beef', 'chicken', 'vegan'],
      type: String,
    },
    isAttendingRehearsalDinner: Boolean,
    isAttendingWedding: Boolean,
    isInvitedToRehearsalDinner: {
      default: false,
      required: true,
      type: Boolean,
    },
    name: {
      default: '',
      required: true,
      trim: true,
      type: String,
    },
    rsvpCode: {
      match: /^[A-Z0-9]{6}$/,
      maxlength: 6,
      minlength: 6,
      required: true,
      type: String,
      uppercase: true,
    },
    title: {
      default: '',
      required: true,
      trim: true,
      type: String,
    },
  },
  { timestamps: true }
);

const Guest = mongoose.model<GuestDocument>('Guest', GuestSchema);

export default Guest;
