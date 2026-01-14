import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitlesCreateManyInputObjectSchema as tblTitlesCreateManyInputObjectSchema } from './objects/tblTitlesCreateManyInput.schema';

export const tblTitlesCreateManySchema: z.ZodType<Prisma.tblTitlesCreateManyArgs> = z.object({ data: z.union([ tblTitlesCreateManyInputObjectSchema, z.array(tblTitlesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblTitlesCreateManyArgs>;

export const tblTitlesCreateManyZodSchema = z.object({ data: z.union([ tblTitlesCreateManyInputObjectSchema, z.array(tblTitlesCreateManyInputObjectSchema) ]),  }).strict();