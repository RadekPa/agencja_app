import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRightsFormSelectObjectSchema as dictRightsFormSelectObjectSchema } from './objects/dictRightsFormSelect.schema';
import { dictRightsFormIncludeObjectSchema as dictRightsFormIncludeObjectSchema } from './objects/dictRightsFormInclude.schema';
import { dictRightsFormWhereUniqueInputObjectSchema as dictRightsFormWhereUniqueInputObjectSchema } from './objects/dictRightsFormWhereUniqueInput.schema';
import { dictRightsFormCreateInputObjectSchema as dictRightsFormCreateInputObjectSchema } from './objects/dictRightsFormCreateInput.schema';
import { dictRightsFormUncheckedCreateInputObjectSchema as dictRightsFormUncheckedCreateInputObjectSchema } from './objects/dictRightsFormUncheckedCreateInput.schema';
import { dictRightsFormUpdateInputObjectSchema as dictRightsFormUpdateInputObjectSchema } from './objects/dictRightsFormUpdateInput.schema';
import { dictRightsFormUncheckedUpdateInputObjectSchema as dictRightsFormUncheckedUpdateInputObjectSchema } from './objects/dictRightsFormUncheckedUpdateInput.schema';

export const dictRightsFormUpsertOneSchema: z.ZodType<Prisma.dictRightsFormUpsertArgs> = z.object({ select: dictRightsFormSelectObjectSchema.optional(), include: dictRightsFormIncludeObjectSchema.optional(), where: dictRightsFormWhereUniqueInputObjectSchema, create: z.union([ dictRightsFormCreateInputObjectSchema, dictRightsFormUncheckedCreateInputObjectSchema ]), update: z.union([ dictRightsFormUpdateInputObjectSchema, dictRightsFormUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictRightsFormUpsertArgs>;

export const dictRightsFormUpsertOneZodSchema = z.object({ select: dictRightsFormSelectObjectSchema.optional(), include: dictRightsFormIncludeObjectSchema.optional(), where: dictRightsFormWhereUniqueInputObjectSchema, create: z.union([ dictRightsFormCreateInputObjectSchema, dictRightsFormUncheckedCreateInputObjectSchema ]), update: z.union([ dictRightsFormUpdateInputObjectSchema, dictRightsFormUncheckedUpdateInputObjectSchema ]) }).strict();