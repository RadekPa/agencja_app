import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictStatesSelectObjectSchema as dictStatesSelectObjectSchema } from './objects/dictStatesSelect.schema';
import { dictStatesIncludeObjectSchema as dictStatesIncludeObjectSchema } from './objects/dictStatesInclude.schema';
import { dictStatesWhereUniqueInputObjectSchema as dictStatesWhereUniqueInputObjectSchema } from './objects/dictStatesWhereUniqueInput.schema';

export const dictStatesDeleteOneSchema: z.ZodType<Prisma.dictStatesDeleteArgs> = z.object({ select: dictStatesSelectObjectSchema.optional(), include: dictStatesIncludeObjectSchema.optional(), where: dictStatesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictStatesDeleteArgs>;

export const dictStatesDeleteOneZodSchema = z.object({ select: dictStatesSelectObjectSchema.optional(), include: dictStatesIncludeObjectSchema.optional(), where: dictStatesWhereUniqueInputObjectSchema }).strict();