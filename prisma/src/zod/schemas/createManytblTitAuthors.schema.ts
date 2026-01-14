import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitAuthorsCreateManyInputObjectSchema as tblTitAuthorsCreateManyInputObjectSchema } from './objects/tblTitAuthorsCreateManyInput.schema';

export const tblTitAuthorsCreateManySchema: z.ZodType<Prisma.tblTitAuthorsCreateManyArgs> = z.object({ data: z.union([ tblTitAuthorsCreateManyInputObjectSchema, z.array(tblTitAuthorsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblTitAuthorsCreateManyArgs>;

export const tblTitAuthorsCreateManyZodSchema = z.object({ data: z.union([ tblTitAuthorsCreateManyInputObjectSchema, z.array(tblTitAuthorsCreateManyInputObjectSchema) ]),  }).strict();