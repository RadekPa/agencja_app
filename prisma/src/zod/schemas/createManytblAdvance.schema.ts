import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAdvanceCreateManyInputObjectSchema as tblAdvanceCreateManyInputObjectSchema } from './objects/tblAdvanceCreateManyInput.schema';

export const tblAdvanceCreateManySchema: z.ZodType<Prisma.tblAdvanceCreateManyArgs> = z.object({ data: z.union([ tblAdvanceCreateManyInputObjectSchema, z.array(tblAdvanceCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblAdvanceCreateManyArgs>;

export const tblAdvanceCreateManyZodSchema = z.object({ data: z.union([ tblAdvanceCreateManyInputObjectSchema, z.array(tblAdvanceCreateManyInputObjectSchema) ]),  }).strict();