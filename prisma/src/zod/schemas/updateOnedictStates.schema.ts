import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictStatesSelectObjectSchema as dictStatesSelectObjectSchema } from './objects/dictStatesSelect.schema';
import { dictStatesIncludeObjectSchema as dictStatesIncludeObjectSchema } from './objects/dictStatesInclude.schema';
import { dictStatesUpdateInputObjectSchema as dictStatesUpdateInputObjectSchema } from './objects/dictStatesUpdateInput.schema';
import { dictStatesUncheckedUpdateInputObjectSchema as dictStatesUncheckedUpdateInputObjectSchema } from './objects/dictStatesUncheckedUpdateInput.schema';
import { dictStatesWhereUniqueInputObjectSchema as dictStatesWhereUniqueInputObjectSchema } from './objects/dictStatesWhereUniqueInput.schema';

export const dictStatesUpdateOneSchema: z.ZodType<Prisma.dictStatesUpdateArgs> = z.object({ select: dictStatesSelectObjectSchema.optional(), include: dictStatesIncludeObjectSchema.optional(), data: z.union([dictStatesUpdateInputObjectSchema, dictStatesUncheckedUpdateInputObjectSchema]), where: dictStatesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictStatesUpdateArgs>;

export const dictStatesUpdateOneZodSchema = z.object({ select: dictStatesSelectObjectSchema.optional(), include: dictStatesIncludeObjectSchema.optional(), data: z.union([dictStatesUpdateInputObjectSchema, dictStatesUncheckedUpdateInputObjectSchema]), where: dictStatesWhereUniqueInputObjectSchema }).strict();