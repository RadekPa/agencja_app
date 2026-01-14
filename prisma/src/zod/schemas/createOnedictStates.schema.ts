import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictStatesSelectObjectSchema as dictStatesSelectObjectSchema } from './objects/dictStatesSelect.schema';
import { dictStatesIncludeObjectSchema as dictStatesIncludeObjectSchema } from './objects/dictStatesInclude.schema';
import { dictStatesCreateInputObjectSchema as dictStatesCreateInputObjectSchema } from './objects/dictStatesCreateInput.schema';
import { dictStatesUncheckedCreateInputObjectSchema as dictStatesUncheckedCreateInputObjectSchema } from './objects/dictStatesUncheckedCreateInput.schema';

export const dictStatesCreateOneSchema: z.ZodType<Prisma.dictStatesCreateArgs> = z.object({ select: dictStatesSelectObjectSchema.optional(), include: dictStatesIncludeObjectSchema.optional(), data: z.union([dictStatesCreateInputObjectSchema, dictStatesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictStatesCreateArgs>;

export const dictStatesCreateOneZodSchema = z.object({ select: dictStatesSelectObjectSchema.optional(), include: dictStatesIncludeObjectSchema.optional(), data: z.union([dictStatesCreateInputObjectSchema, dictStatesUncheckedCreateInputObjectSchema]) }).strict();