import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictDistributionTypeSelectObjectSchema as dictDistributionTypeSelectObjectSchema } from './objects/dictDistributionTypeSelect.schema';
import { dictDistributionTypeIncludeObjectSchema as dictDistributionTypeIncludeObjectSchema } from './objects/dictDistributionTypeInclude.schema';
import { dictDistributionTypeUpdateInputObjectSchema as dictDistributionTypeUpdateInputObjectSchema } from './objects/dictDistributionTypeUpdateInput.schema';
import { dictDistributionTypeUncheckedUpdateInputObjectSchema as dictDistributionTypeUncheckedUpdateInputObjectSchema } from './objects/dictDistributionTypeUncheckedUpdateInput.schema';
import { dictDistributionTypeWhereUniqueInputObjectSchema as dictDistributionTypeWhereUniqueInputObjectSchema } from './objects/dictDistributionTypeWhereUniqueInput.schema';

export const dictDistributionTypeUpdateOneSchema: z.ZodType<Prisma.dictDistributionTypeUpdateArgs> = z.object({ select: dictDistributionTypeSelectObjectSchema.optional(), include: dictDistributionTypeIncludeObjectSchema.optional(), data: z.union([dictDistributionTypeUpdateInputObjectSchema, dictDistributionTypeUncheckedUpdateInputObjectSchema]), where: dictDistributionTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictDistributionTypeUpdateArgs>;

export const dictDistributionTypeUpdateOneZodSchema = z.object({ select: dictDistributionTypeSelectObjectSchema.optional(), include: dictDistributionTypeIncludeObjectSchema.optional(), data: z.union([dictDistributionTypeUpdateInputObjectSchema, dictDistributionTypeUncheckedUpdateInputObjectSchema]), where: dictDistributionTypeWhereUniqueInputObjectSchema }).strict();