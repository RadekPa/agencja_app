import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustomersCreateManyInputObjectSchema as tblCustomersCreateManyInputObjectSchema } from './objects/tblCustomersCreateManyInput.schema';

export const tblCustomersCreateManySchema: z.ZodType<Prisma.tblCustomersCreateManyArgs> = z.object({ data: z.union([ tblCustomersCreateManyInputObjectSchema, z.array(tblCustomersCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblCustomersCreateManyArgs>;

export const tblCustomersCreateManyZodSchema = z.object({ data: z.union([ tblCustomersCreateManyInputObjectSchema, z.array(tblCustomersCreateManyInputObjectSchema) ]),  }).strict();