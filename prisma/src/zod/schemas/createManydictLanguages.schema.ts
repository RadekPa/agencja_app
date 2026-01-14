import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictLanguagesCreateManyInputObjectSchema as dictLanguagesCreateManyInputObjectSchema } from './objects/dictLanguagesCreateManyInput.schema';

export const dictLanguagesCreateManySchema: z.ZodType<Prisma.dictLanguagesCreateManyArgs> = z.object({ data: z.union([ dictLanguagesCreateManyInputObjectSchema, z.array(dictLanguagesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictLanguagesCreateManyArgs>;

export const dictLanguagesCreateManyZodSchema = z.object({ data: z.union([ dictLanguagesCreateManyInputObjectSchema, z.array(dictLanguagesCreateManyInputObjectSchema) ]),  }).strict();