import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from 'config';

export interface UserDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(password: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, require: true },
    name: { type: String, require: true },
    password: { type: String, require: true, minlength: 6 },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next: any) {
  let user = this as UserDocument;

  if (!user.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'));
  const hash = await bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next();
});

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  const user = this as UserDocument;

  return bcrypt.compare(password, user.password).catch((e) => false);
};

const User = mongoose.model('User', userSchema);

export default User;
