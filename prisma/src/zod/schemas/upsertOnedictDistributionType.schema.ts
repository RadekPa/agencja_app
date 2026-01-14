import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictDistributionTypeSelectObjectSchema as dictDistributionTypeSelectObjectSchema } from './objects/dictDistributionTypeSelect.schema';
import { dictDistributionTypeIncludeObjectSchema as dictDistributionTypeIncludeObjectSchema } from './objects/dictDistributionTypeInclude.schema';
import { dictDistributionTypeWhereUniqueInputObjectSchema as dictDistributionTypeWhereUniqueInputObjectSchema } from './objects/dictDistributionTypeWhereUniqueInput.schema';
import { dictDistributionTypeCreateInputObjectSchema as dictDistributionTypeCreateInputObjectSchema } from './objects/dictDistributionTypeCreateInput.schema';
import { dictDistributionTypeUncheckedCreateInputObjectSchema as dictDistributionTypeUncheckedCreateInputObjectSchema } from './objects/dictDistributionTypeUncheckedCreateInput.schema';
import { dictDistributionTypeUpdateInputObjectSchema as dictDistributionTypeUpdateInputObjectSchema } from './objects/dictDistributionTypeUpdateInput.schema';
import { dictDistributionTypeUncheckedUpdateInputObjectSchema as dictDistributionTypeUncheckedUpdateInputObjectSchema } from './objects/dictDistributionTypeUncheckedUpdateInput.schema';

export const dictDistributionTypeUpsertOneSchema: z.ZodType<Prisma.dictDistributionTypeUpsertArgs> = z.object({ select: dictDistributionTypeSelectObjectSchema.optional(), include: dictDistributionTypeIncludeObjectSchema.optional(), where: dictDistributionTypeWhereUniqueInputObjectSchema, create: z.union([ dictDistributionTypeCreateInputObjectSchema, dictDistributionTypeUncheckedCreateInputObjectSchema ]), update: z.union([ dictDistributionTypeUpdateInputObjectSchema, dictDistributionTypeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictDistributionTypeUpsertArgs>;

export const dictDistributionTypeUpsertOneZodSchema = z.object({ select: dictDistributionTypeSelectObjectSchema.optional(), include: dictDistributionTypeIncludeObjectSchema.optional(), where: dictDistributionTypeWhereUniqueInputObjectSchema, create: z.union([ dictDistributionTypeCreateInputObjectSchema, dictDistributionTypeUncheckedCreateInputObjectSchema ]), update: z.union([ dictDistributionTypeUpdateInputObjectSchema, dictDistributionTypeUncheckedUpdateInputObjectSchema ]) }).strict();