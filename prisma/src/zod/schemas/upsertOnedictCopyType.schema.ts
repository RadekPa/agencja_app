import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCopyTypeSelectObjectSchema as dictCopyTypeSelectObjectSchema } from './objects/dictCopyTypeSelect.schema';
import { dictCopyTypeIncludeObjectSchema as dictCopyTypeIncludeObjectSchema } from './objects/dictCopyTypeInclude.schema';
import { dictCopyTypeWhereUniqueInputObjectSchema as dictCopyTypeWhereUniqueInputObjectSchema } from './objects/dictCopyTypeWhereUniqueInput.schema';
import { dictCopyTypeCreateInputObjectSchema as dictCopyTypeCreateInputObjectSchema } from './objects/dictCopyTypeCreateInput.schema';
import { dictCopyTypeUncheckedCreateInputObjectSchema as dictCopyTypeUncheckedCreateInputObjectSchema } from './objects/dictCopyTypeUncheckedCreateInput.schema';
import { dictCopyTypeUpdateInputObjectSchema as dictCopyTypeUpdateInputObjectSchema } from './objects/dictCopyTypeUpdateInput.schema';
import { dictCopyTypeUncheckedUpdateInputObjectSchema as dictCopyTypeUncheckedUpdateInputObjectSchema } from './objects/dictCopyTypeUncheckedUpdateInput.schema';

export const dictCopyTypeUpsertOneSchema: z.ZodType<Prisma.dictCopyTypeUpsertArgs> = z.object({ select: dictCopyTypeSelectObjectSchema.optional(), include: dictCopyTypeIncludeObjectSchema.optional(), where: dictCopyTypeWhereUniqueInputObjectSchema, create: z.union([ dictCopyTypeCreateInputObjectSchema, dictCopyTypeUncheckedCreateInputObjectSchema ]), update: z.union([ dictCopyTypeUpdateInputObjectSchema, dictCopyTypeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictCopyTypeUpsertArgs>;

export const dictCopyTypeUpsertOneZodSchema = z.object({ select: dictCopyTypeSelectObjectSchema.optional(), include: dictCopyTypeIncludeObjectSchema.optional(), where: dictCopyTypeWhereUniqueInputObjectSchema, create: z.union([ dictCopyTypeCreateInputObjectSchema, dictCopyTypeUncheckedCreateInputObjectSchema ]), update: z.union([ dictCopyTypeUpdateInputObjectSchema, dictCopyTypeUncheckedUpdateInputObjectSchema ]) }).strict();