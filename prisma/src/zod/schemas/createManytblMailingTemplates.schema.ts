import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMailingTemplatesCreateManyInputObjectSchema as tblMailingTemplatesCreateManyInputObjectSchema } from './objects/tblMailingTemplatesCreateManyInput.schema';

export const tblMailingTemplatesCreateManySchema: z.ZodType<Prisma.tblMailingTemplatesCreateManyArgs> = z.object({ data: z.union([ tblMailingTemplatesCreateManyInputObjectSchema, z.array(tblMailingTemplatesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblMailingTemplatesCreateManyArgs>;

export const tblMailingTemplatesCreateManyZodSchema = z.object({ data: z.union([ tblMailingTemplatesCreateManyInputObjectSchema, z.array(tblMailingTemplatesCreateManyInputObjectSchema) ]),  }).strict();