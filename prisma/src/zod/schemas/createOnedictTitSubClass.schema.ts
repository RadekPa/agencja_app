import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTitSubClassSelectObjectSchema as dictTitSubClassSelectObjectSchema } from './objects/dictTitSubClassSelect.schema';
import { dictTitSubClassIncludeObjectSchema as dictTitSubClassIncludeObjectSchema } from './objects/dictTitSubClassInclude.schema';
import { dictTitSubClassCreateInputObjectSchema as dictTitSubClassCreateInputObjectSchema } from './objects/dictTitSubClassCreateInput.schema';
import { dictTitSubClassUncheckedCreateInputObjectSchema as dictTitSubClassUncheckedCreateInputObjectSchema } from './objects/dictTitSubClassUncheckedCreateInput.schema';

export const dictTitSubClassCreateOneSchema: z.ZodType<Prisma.dictTitSubClassCreateArgs> = z.object({ select: dictTitSubClassSelectObjectSchema.optional(), include: dictTitSubClassIncludeObjectSchema.optional(), data: z.union([dictTitSubClassCreateInputObjectSchema, dictTitSubClassUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictTitSubClassCreateArgs>;

export const dictTitSubClassCreateOneZodSchema = z.object({ select: dictTitSubClassSelectObjectSchema.optional(), include: dictTitSubClassIncludeObjectSchema.optional(), data: z.union([dictTitSubClassCreateInputObjectSchema, dictTitSubClassUncheckedCreateInputObjectSchema]) }).strict();