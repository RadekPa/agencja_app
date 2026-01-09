import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  fullName: z.string().max(150).optional().nullable(),
  firstName: z.string().max(150).optional().nullable(),
  middleName: z.string().max(100).optional().nullable(),
  lastName: z.string().max(150).optional().nullable(),
  suffix: z.string().max(50).optional().nullable(),
  penName: z.string().max(150).optional().nullable(),
  userMod: z.string().max(30).optional(),
  dateMod: z.coerce.date().optional(),
  remarks: z.string().max(1000).optional().nullable()
}).strict();
export const AuthorCreateInputObjectSchema: z.ZodType<Prisma.AuthorCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorCreateInput>;
export const AuthorCreateInputObjectZodSchema = makeSchema();
