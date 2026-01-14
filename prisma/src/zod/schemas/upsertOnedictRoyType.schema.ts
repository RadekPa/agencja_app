import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyTypeSelectObjectSchema as dictRoyTypeSelectObjectSchema } from './objects/dictRoyTypeSelect.schema';
import { dictRoyTypeIncludeObjectSchema as dictRoyTypeIncludeObjectSchema } from './objects/dictRoyTypeInclude.schema';
import { dictRoyTypeWhereUniqueInputObjectSchema as dictRoyTypeWhereUniqueInputObjectSchema } from './objects/dictRoyTypeWhereUniqueInput.schema';
import { dictRoyTypeCreateInputObjectSchema as dictRoyTypeCreateInputObjectSchema } from './objects/dictRoyTypeCreateInput.schema';
import { dictRoyTypeUncheckedCreateInputObjectSchema as dictRoyTypeUncheckedCreateInputObjectSchema } from './objects/dictRoyTypeUncheckedCreateInput.schema';
import { dictRoyTypeUpdateInputObjectSchema as dictRoyTypeUpdateInputObjectSchema } from './objects/dictRoyTypeUpdateInput.schema';
import { dictRoyTypeUncheckedUpdateInputObjectSchema as dictRoyTypeUncheckedUpdateInputObjectSchema } from './objects/dictRoyTypeUncheckedUpdateInput.schema';

export const dictRoyTypeUpsertOneSchema: z.ZodType<Prisma.dictRoyTypeUpsertArgs> = z.object({ select: dictRoyTypeSelectObjectSchema.optional(), include: dictRoyTypeIncludeObjectSchema.optional(), where: dictRoyTypeWhereUniqueInputObjectSchema, create: z.union([ dictRoyTypeCreateInputObjectSchema, dictRoyTypeUncheckedCreateInputObjectSchema ]), update: z.union([ dictRoyTypeUpdateInputObjectSchema, dictRoyTypeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictRoyTypeUpsertArgs>;

export const dictRoyTypeUpsertOneZodSchema = z.object({ select: dictRoyTypeSelectObjectSchema.optional(), include: dictRoyTypeIncludeObjectSchema.optional(), where: dictRoyTypeWhereUniqueInputObjectSchema, create: z.union([ dictRoyTypeCreateInputObjectSchema, dictRoyTypeUncheckedCreateInputObjectSchema ]), update: z.union([ dictRoyTypeUpdateInputObjectSchema, dictRoyTypeUncheckedUpdateInputObjectSchema ]) }).strict();