import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCopyTypeCreateManyInputObjectSchema as dictCopyTypeCreateManyInputObjectSchema } from './objects/dictCopyTypeCreateManyInput.schema';

export const dictCopyTypeCreateManySchema: z.ZodType<Prisma.dictCopyTypeCreateManyArgs> = z.object({ data: z.union([ dictCopyTypeCreateManyInputObjectSchema, z.array(dictCopyTypeCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictCopyTypeCreateManyArgs>;

export const dictCopyTypeCreateManyZodSchema = z.object({ data: z.union([ dictCopyTypeCreateManyInputObjectSchema, z.array(dictCopyTypeCreateManyInputObjectSchema) ]),  }).strict();