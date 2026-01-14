import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAuthorsCreateManyInputObjectSchema as tblAuthorsCreateManyInputObjectSchema } from './objects/tblAuthorsCreateManyInput.schema';

export const tblAuthorsCreateManySchema: z.ZodType<Prisma.tblAuthorsCreateManyArgs> = z.object({ data: z.union([ tblAuthorsCreateManyInputObjectSchema, z.array(tblAuthorsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblAuthorsCreateManyArgs>;

export const tblAuthorsCreateManyZodSchema = z.object({ data: z.union([ tblAuthorsCreateManyInputObjectSchema, z.array(tblAuthorsCreateManyInputObjectSchema) ]),  }).strict();