import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyTypeSelectObjectSchema as dictRoyTypeSelectObjectSchema } from './objects/dictRoyTypeSelect.schema';
import { dictRoyTypeIncludeObjectSchema as dictRoyTypeIncludeObjectSchema } from './objects/dictRoyTypeInclude.schema';
import { dictRoyTypeUpdateInputObjectSchema as dictRoyTypeUpdateInputObjectSchema } from './objects/dictRoyTypeUpdateInput.schema';
import { dictRoyTypeUncheckedUpdateInputObjectSchema as dictRoyTypeUncheckedUpdateInputObjectSchema } from './objects/dictRoyTypeUncheckedUpdateInput.schema';
import { dictRoyTypeWhereUniqueInputObjectSchema as dictRoyTypeWhereUniqueInputObjectSchema } from './objects/dictRoyTypeWhereUniqueInput.schema';

export const dictRoyTypeUpdateOneSchema: z.ZodType<Prisma.dictRoyTypeUpdateArgs> = z.object({ select: dictRoyTypeSelectObjectSchema.optional(), include: dictRoyTypeIncludeObjectSchema.optional(), data: z.union([dictRoyTypeUpdateInputObjectSchema, dictRoyTypeUncheckedUpdateInputObjectSchema]), where: dictRoyTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictRoyTypeUpdateArgs>;

export const dictRoyTypeUpdateOneZodSchema = z.object({ select: dictRoyTypeSelectObjectSchema.optional(), include: dictRoyTypeIncludeObjectSchema.optional(), data: z.union([dictRoyTypeUpdateInputObjectSchema, dictRoyTypeUncheckedUpdateInputObjectSchema]), where: dictRoyTypeWhereUniqueInputObjectSchema }).strict();