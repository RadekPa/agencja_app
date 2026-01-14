import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMissRoyExcludeReasonCreateManyInputObjectSchema as dictMissRoyExcludeReasonCreateManyInputObjectSchema } from './objects/dictMissRoyExcludeReasonCreateManyInput.schema';

export const dictMissRoyExcludeReasonCreateManySchema: z.ZodType<Prisma.dictMissRoyExcludeReasonCreateManyArgs> = z.object({ data: z.union([ dictMissRoyExcludeReasonCreateManyInputObjectSchema, z.array(dictMissRoyExcludeReasonCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonCreateManyArgs>;

export const dictMissRoyExcludeReasonCreateManyZodSchema = z.object({ data: z.union([ dictMissRoyExcludeReasonCreateManyInputObjectSchema, z.array(dictMissRoyExcludeReasonCreateManyInputObjectSchema) ]),  }).strict();