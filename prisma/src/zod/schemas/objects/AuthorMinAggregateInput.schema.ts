import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  fullName: z.literal(true).optional(),
  firstName: z.literal(true).optional(),
  middleName: z.literal(true).optional(),
  lastName: z.literal(true).optional(),
  suffix: z.literal(true).optional(),
  penName: z.literal(true).optional(),
  userMod: z.literal(true).optional(),
  dateMod: z.literal(true).optional(),
  remarks: z.literal(true).optional()
}).strict();
export const AuthorMinAggregateInputObjectSchema: z.ZodType<Prisma.AuthorMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AuthorMinAggregateInputType>;
export const AuthorMinAggregateInputObjectZodSchema = makeSchema();
