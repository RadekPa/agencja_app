import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPubISBNCreateManyInputObjectSchema as tblPubISBNCreateManyInputObjectSchema } from './objects/tblPubISBNCreateManyInput.schema';

export const tblPubISBNCreateManySchema: z.ZodType<Prisma.tblPubISBNCreateManyArgs> = z.object({ data: z.union([ tblPubISBNCreateManyInputObjectSchema, z.array(tblPubISBNCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblPubISBNCreateManyArgs>;

export const tblPubISBNCreateManyZodSchema = z.object({ data: z.union([ tblPubISBNCreateManyInputObjectSchema, z.array(tblPubISBNCreateManyInputObjectSchema) ]),  }).strict();