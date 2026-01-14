import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictStatesSelectObjectSchema as dictStatesSelectObjectSchema } from './objects/dictStatesSelect.schema';
import { dictStatesIncludeObjectSchema as dictStatesIncludeObjectSchema } from './objects/dictStatesInclude.schema';
import { dictStatesWhereUniqueInputObjectSchema as dictStatesWhereUniqueInputObjectSchema } from './objects/dictStatesWhereUniqueInput.schema';

export const dictStatesFindUniqueOrThrowSchema: z.ZodType<Prisma.dictStatesFindUniqueOrThrowArgs> = z.object({ select: dictStatesSelectObjectSchema.optional(), include: dictStatesIncludeObjectSchema.optional(), where: dictStatesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictStatesFindUniqueOrThrowArgs>;

export const dictStatesFindUniqueOrThrowZodSchema = z.object({ select: dictStatesSelectObjectSchema.optional(), include: dictStatesIncludeObjectSchema.optional(), where: dictStatesWhereUniqueInputObjectSchema }).strict();