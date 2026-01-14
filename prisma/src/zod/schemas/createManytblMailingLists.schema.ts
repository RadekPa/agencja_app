import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMailingListsCreateManyInputObjectSchema as tblMailingListsCreateManyInputObjectSchema } from './objects/tblMailingListsCreateManyInput.schema';

export const tblMailingListsCreateManySchema: z.ZodType<Prisma.tblMailingListsCreateManyArgs> = z.object({ data: z.union([ tblMailingListsCreateManyInputObjectSchema, z.array(tblMailingListsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblMailingListsCreateManyArgs>;

export const tblMailingListsCreateManyZodSchema = z.object({ data: z.union([ tblMailingListsCreateManyInputObjectSchema, z.array(tblMailingListsCreateManyInputObjectSchema) ]),  }).strict();