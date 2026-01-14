import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTitSubClassSelectObjectSchema as dictTitSubClassSelectObjectSchema } from './objects/dictTitSubClassSelect.schema';
import { dictTitSubClassIncludeObjectSchema as dictTitSubClassIncludeObjectSchema } from './objects/dictTitSubClassInclude.schema';
import { dictTitSubClassWhereUniqueInputObjectSchema as dictTitSubClassWhereUniqueInputObjectSchema } from './objects/dictTitSubClassWhereUniqueInput.schema';

export const dictTitSubClassFindUniqueSchema: z.ZodType<Prisma.dictTitSubClassFindUniqueArgs> = z.object({ select: dictTitSubClassSelectObjectSchema.optional(), include: dictTitSubClassIncludeObjectSchema.optional(), where: dictTitSubClassWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictTitSubClassFindUniqueArgs>;

export const dictTitSubClassFindUniqueZodSchema = z.object({ select: dictTitSubClassSelectObjectSchema.optional(), include: dictTitSubClassIncludeObjectSchema.optional(), where: dictTitSubClassWhereUniqueInputObjectSchema }).strict();