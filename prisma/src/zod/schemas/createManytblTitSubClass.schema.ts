import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitSubClassCreateManyInputObjectSchema as tblTitSubClassCreateManyInputObjectSchema } from './objects/tblTitSubClassCreateManyInput.schema';

export const tblTitSubClassCreateManySchema: z.ZodType<Prisma.tblTitSubClassCreateManyArgs> = z.object({ data: z.union([ tblTitSubClassCreateManyInputObjectSchema, z.array(tblTitSubClassCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblTitSubClassCreateManyArgs>;

export const tblTitSubClassCreateManyZodSchema = z.object({ data: z.union([ tblTitSubClassCreateManyInputObjectSchema, z.array(tblTitSubClassCreateManyInputObjectSchema) ]),  }).strict();