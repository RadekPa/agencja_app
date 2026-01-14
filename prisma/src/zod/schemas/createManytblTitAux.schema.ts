import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitAuxCreateManyInputObjectSchema as tblTitAuxCreateManyInputObjectSchema } from './objects/tblTitAuxCreateManyInput.schema';

export const tblTitAuxCreateManySchema: z.ZodType<Prisma.tblTitAuxCreateManyArgs> = z.object({ data: z.union([ tblTitAuxCreateManyInputObjectSchema, z.array(tblTitAuxCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblTitAuxCreateManyArgs>;

export const tblTitAuxCreateManyZodSchema = z.object({ data: z.union([ tblTitAuxCreateManyInputObjectSchema, z.array(tblTitAuxCreateManyInputObjectSchema) ]),  }).strict();