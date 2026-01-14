import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictDistributionTypeSelectObjectSchema as dictDistributionTypeSelectObjectSchema } from './objects/dictDistributionTypeSelect.schema';
import { dictDistributionTypeIncludeObjectSchema as dictDistributionTypeIncludeObjectSchema } from './objects/dictDistributionTypeInclude.schema';
import { dictDistributionTypeCreateInputObjectSchema as dictDistributionTypeCreateInputObjectSchema } from './objects/dictDistributionTypeCreateInput.schema';
import { dictDistributionTypeUncheckedCreateInputObjectSchema as dictDistributionTypeUncheckedCreateInputObjectSchema } from './objects/dictDistributionTypeUncheckedCreateInput.schema';

export const dictDistributionTypeCreateOneSchema: z.ZodType<Prisma.dictDistributionTypeCreateArgs> = z.object({ select: dictDistributionTypeSelectObjectSchema.optional(), include: dictDistributionTypeIncludeObjectSchema.optional(), data: z.union([dictDistributionTypeCreateInputObjectSchema, dictDistributionTypeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictDistributionTypeCreateArgs>;

export const dictDistributionTypeCreateOneZodSchema = z.object({ select: dictDistributionTypeSelectObjectSchema.optional(), include: dictDistributionTypeIncludeObjectSchema.optional(), data: z.union([dictDistributionTypeCreateInputObjectSchema, dictDistributionTypeUncheckedCreateInputObjectSchema]) }).strict();