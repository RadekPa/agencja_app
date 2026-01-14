import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTitSubClassSelectObjectSchema as dictTitSubClassSelectObjectSchema } from './objects/dictTitSubClassSelect.schema';
import { dictTitSubClassIncludeObjectSchema as dictTitSubClassIncludeObjectSchema } from './objects/dictTitSubClassInclude.schema';
import { dictTitSubClassWhereUniqueInputObjectSchema as dictTitSubClassWhereUniqueInputObjectSchema } from './objects/dictTitSubClassWhereUniqueInput.schema';

export const dictTitSubClassFindUniqueOrThrowSchema: z.ZodType<Prisma.dictTitSubClassFindUniqueOrThrowArgs> = z.object({ select: dictTitSubClassSelectObjectSchema.optional(), include: dictTitSubClassIncludeObjectSchema.optional(), where: dictTitSubClassWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictTitSubClassFindUniqueOrThrowArgs>;

export const dictTitSubClassFindUniqueOrThrowZodSchema = z.object({ select: dictTitSubClassSelectObjectSchema.optional(), include: dictTitSubClassIncludeObjectSchema.optional(), where: dictTitSubClassWhereUniqueInputObjectSchema }).strict();