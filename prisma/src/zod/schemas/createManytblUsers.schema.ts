import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUsersCreateManyInputObjectSchema as tblUsersCreateManyInputObjectSchema } from './objects/tblUsersCreateManyInput.schema';

export const tblUsersCreateManySchema: z.ZodType<Prisma.tblUsersCreateManyArgs> = z.object({ data: z.union([ tblUsersCreateManyInputObjectSchema, z.array(tblUsersCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblUsersCreateManyArgs>;

export const tblUsersCreateManyZodSchema = z.object({ data: z.union([ tblUsersCreateManyInputObjectSchema, z.array(tblUsersCreateManyInputObjectSchema) ]),  }).strict();