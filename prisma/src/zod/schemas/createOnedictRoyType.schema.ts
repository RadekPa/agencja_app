import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyTypeSelectObjectSchema as dictRoyTypeSelectObjectSchema } from './objects/dictRoyTypeSelect.schema';
import { dictRoyTypeIncludeObjectSchema as dictRoyTypeIncludeObjectSchema } from './objects/dictRoyTypeInclude.schema';
import { dictRoyTypeCreateInputObjectSchema as dictRoyTypeCreateInputObjectSchema } from './objects/dictRoyTypeCreateInput.schema';
import { dictRoyTypeUncheckedCreateInputObjectSchema as dictRoyTypeUncheckedCreateInputObjectSchema } from './objects/dictRoyTypeUncheckedCreateInput.schema';

export const dictRoyTypeCreateOneSchema: z.ZodType<Prisma.dictRoyTypeCreateArgs> = z.object({ select: dictRoyTypeSelectObjectSchema.optional(), include: dictRoyTypeIncludeObjectSchema.optional(), data: z.union([dictRoyTypeCreateInputObjectSchema, dictRoyTypeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictRoyTypeCreateArgs>;

export const dictRoyTypeCreateOneZodSchema = z.object({ select: dictRoyTypeSelectObjectSchema.optional(), include: dictRoyTypeIncludeObjectSchema.optional(), data: z.union([dictRoyTypeCreateInputObjectSchema, dictRoyTypeUncheckedCreateInputObjectSchema]) }).strict();