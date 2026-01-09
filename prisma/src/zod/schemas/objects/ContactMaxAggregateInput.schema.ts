import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  phoneNumber: z.literal(true).optional(),
  firstName: z.literal(true).optional(),
  middleName: z.literal(true).optional(),
  lastName: z.literal(true).optional(),
  informal: z.literal(true).optional(),
  fax: z.literal(true).optional(),
  email: z.literal(true).optional(),
  userMod: z.literal(true).optional(),
  dateMod: z.literal(true).optional(),
  contactPosition: z.literal(true).optional(),
  accountant: z.literal(true).optional()
}).strict();
export const ContactMaxAggregateInputObjectSchema: z.ZodType<Prisma.ContactMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ContactMaxAggregateInputType>;
export const ContactMaxAggregateInputObjectZodSchema = makeSchema();
