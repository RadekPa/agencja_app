import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRightsFormSelectObjectSchema as dictRightsFormSelectObjectSchema } from './objects/dictRightsFormSelect.schema';
import { dictRightsFormIncludeObjectSchema as dictRightsFormIncludeObjectSchema } from './objects/dictRightsFormInclude.schema';
import { dictRightsFormUpdateInputObjectSchema as dictRightsFormUpdateInputObjectSchema } from './objects/dictRightsFormUpdateInput.schema';
import { dictRightsFormUncheckedUpdateInputObjectSchema as dictRightsFormUncheckedUpdateInputObjectSchema } from './objects/dictRightsFormUncheckedUpdateInput.schema';
import { dictRightsFormWhereUniqueInputObjectSchema as dictRightsFormWhereUniqueInputObjectSchema } from './objects/dictRightsFormWhereUniqueInput.schema';

export const dictRightsFormUpdateOneSchema: z.ZodType<Prisma.dictRightsFormUpdateArgs> = z.object({ select: dictRightsFormSelectObjectSchema.optional(), include: dictRightsFormIncludeObjectSchema.optional(), data: z.union([dictRightsFormUpdateInputObjectSchema, dictRightsFormUncheckedUpdateInputObjectSchema]), where: dictRightsFormWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictRightsFormUpdateArgs>;

export const dictRightsFormUpdateOneZodSchema = z.object({ select: dictRightsFormSelectObjectSchema.optional(), include: dictRightsFormIncludeObjectSchema.optional(), data: z.union([dictRightsFormUpdateInputObjectSchema, dictRightsFormUncheckedUpdateInputObjectSchema]), where: dictRightsFormWhereUniqueInputObjectSchema }).strict();