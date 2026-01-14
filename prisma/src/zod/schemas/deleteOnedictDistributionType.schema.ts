import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictDistributionTypeSelectObjectSchema as dictDistributionTypeSelectObjectSchema } from './objects/dictDistributionTypeSelect.schema';
import { dictDistributionTypeIncludeObjectSchema as dictDistributionTypeIncludeObjectSchema } from './objects/dictDistributionTypeInclude.schema';
import { dictDistributionTypeWhereUniqueInputObjectSchema as dictDistributionTypeWhereUniqueInputObjectSchema } from './objects/dictDistributionTypeWhereUniqueInput.schema';

export const dictDistributionTypeDeleteOneSchema: z.ZodType<Prisma.dictDistributionTypeDeleteArgs> = z.object({ select: dictDistributionTypeSelectObjectSchema.optional(), include: dictDistributionTypeIncludeObjectSchema.optional(), where: dictDistributionTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictDistributionTypeDeleteArgs>;

export const dictDistributionTypeDeleteOneZodSchema = z.object({ select: dictDistributionTypeSelectObjectSchema.optional(), include: dictDistributionTypeIncludeObjectSchema.optional(), where: dictDistributionTypeWhereUniqueInputObjectSchema }).strict();