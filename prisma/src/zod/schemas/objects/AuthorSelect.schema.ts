import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  fullName: z.boolean().optional(),
  firstName: z.boolean().optional(),
  middleName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  suffix: z.boolean().optional(),
  penName: z.boolean().optional(),
  userMod: z.boolean().optional(),
  dateMod: z.boolean().optional(),
  remarks: z.boolean().optional()
}).strict();
export const AuthorSelectObjectSchema: z.ZodType<Prisma.AuthorSelect> = makeSchema() as unknown as z.ZodType<Prisma.AuthorSelect>;
export const AuthorSelectObjectZodSchema = makeSchema();
