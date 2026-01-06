import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  phoneNumber: z.string().max(20).optional().nullable(),
  firstName: z.string().max(30),
  middleName: z.string().max(30).optional().nullable(),
  lastName: z.string().max(50),
  informal: z.number().int().optional(),
  fax: z.string().max(20).optional().nullable(),
  email: z.string().max(50).optional().nullable(),
  userMod: z.string().max(30).optional(),
  dateMod: z.coerce.date().optional(),
  contactPosition: z.string().max(50).optional().nullable(),
  accountant: z.number().int().optional().nullable()
}).strict();
export const AuthorCreateInputObjectSchema: z.ZodType<Prisma.AuthorCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorCreateInput>;
export const AuthorCreateInputObjectZodSchema = makeSchema();
