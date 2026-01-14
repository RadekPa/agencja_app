import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPubLocalCreateManyInputObjectSchema as tblPubLocalCreateManyInputObjectSchema } from './objects/tblPubLocalCreateManyInput.schema';

export const tblPubLocalCreateManySchema: z.ZodType<Prisma.tblPubLocalCreateManyArgs> = z.object({ data: z.union([ tblPubLocalCreateManyInputObjectSchema, z.array(tblPubLocalCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblPubLocalCreateManyArgs>;

export const tblPubLocalCreateManyZodSchema = z.object({ data: z.union([ tblPubLocalCreateManyInputObjectSchema, z.array(tblPubLocalCreateManyInputObjectSchema) ]),  }).strict();