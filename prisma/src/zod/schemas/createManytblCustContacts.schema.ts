import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustContactsCreateManyInputObjectSchema as tblCustContactsCreateManyInputObjectSchema } from './objects/tblCustContactsCreateManyInput.schema';

export const tblCustContactsCreateManySchema: z.ZodType<Prisma.tblCustContactsCreateManyArgs> = z.object({ data: z.union([ tblCustContactsCreateManyInputObjectSchema, z.array(tblCustContactsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblCustContactsCreateManyArgs>;

export const tblCustContactsCreateManyZodSchema = z.object({ data: z.union([ tblCustContactsCreateManyInputObjectSchema, z.array(tblCustContactsCreateManyInputObjectSchema) ]),  }).strict();