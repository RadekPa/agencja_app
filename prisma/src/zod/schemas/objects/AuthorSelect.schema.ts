import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  phoneNumber: z.boolean().optional(),
  firstName: z.boolean().optional(),
  middleName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  informal: z.boolean().optional(),
  fax: z.boolean().optional(),
  email: z.boolean().optional(),
  userMod: z.boolean().optional(),
  dateMod: z.boolean().optional(),
  contactPosition: z.boolean().optional(),
  accountant: z.boolean().optional()
}).strict();
export const AuthorSelectObjectSchema: z.ZodType<Prisma.AuthorSelect> = makeSchema() as unknown as z.ZodType<Prisma.AuthorSelect>;
export const AuthorSelectObjectZodSchema = makeSchema();
