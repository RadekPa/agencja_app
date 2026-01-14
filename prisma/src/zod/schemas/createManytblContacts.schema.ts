import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblContactsCreateManyInputObjectSchema as tblContactsCreateManyInputObjectSchema } from './objects/tblContactsCreateManyInput.schema';

export const tblContactsCreateManySchema: z.ZodType<Prisma.tblContactsCreateManyArgs> = z.object({ data: z.union([ tblContactsCreateManyInputObjectSchema, z.array(tblContactsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblContactsCreateManyArgs>;

export const tblContactsCreateManyZodSchema = z.object({ data: z.union([ tblContactsCreateManyInputObjectSchema, z.array(tblContactsCreateManyInputObjectSchema) ]),  }).strict();