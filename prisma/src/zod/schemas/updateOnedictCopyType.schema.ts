import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCopyTypeSelectObjectSchema as dictCopyTypeSelectObjectSchema } from './objects/dictCopyTypeSelect.schema';
import { dictCopyTypeIncludeObjectSchema as dictCopyTypeIncludeObjectSchema } from './objects/dictCopyTypeInclude.schema';
import { dictCopyTypeUpdateInputObjectSchema as dictCopyTypeUpdateInputObjectSchema } from './objects/dictCopyTypeUpdateInput.schema';
import { dictCopyTypeUncheckedUpdateInputObjectSchema as dictCopyTypeUncheckedUpdateInputObjectSchema } from './objects/dictCopyTypeUncheckedUpdateInput.schema';
import { dictCopyTypeWhereUniqueInputObjectSchema as dictCopyTypeWhereUniqueInputObjectSchema } from './objects/dictCopyTypeWhereUniqueInput.schema';

export const dictCopyTypeUpdateOneSchema: z.ZodType<Prisma.dictCopyTypeUpdateArgs> = z.object({ select: dictCopyTypeSelectObjectSchema.optional(), include: dictCopyTypeIncludeObjectSchema.optional(), data: z.union([dictCopyTypeUpdateInputObjectSchema, dictCopyTypeUncheckedUpdateInputObjectSchema]), where: dictCopyTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictCopyTypeUpdateArgs>;

export const dictCopyTypeUpdateOneZodSchema = z.object({ select: dictCopyTypeSelectObjectSchema.optional(), include: dictCopyTypeIncludeObjectSchema.optional(), data: z.union([dictCopyTypeUpdateInputObjectSchema, dictCopyTypeUncheckedUpdateInputObjectSchema]), where: dictCopyTypeWhereUniqueInputObjectSchema }).strict();