import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictDistributionTypeSelectObjectSchema as dictDistributionTypeSelectObjectSchema } from './objects/dictDistributionTypeSelect.schema';
import { dictDistributionTypeIncludeObjectSchema as dictDistributionTypeIncludeObjectSchema } from './objects/dictDistributionTypeInclude.schema';
import { dictDistributionTypeWhereUniqueInputObjectSchema as dictDistributionTypeWhereUniqueInputObjectSchema } from './objects/dictDistributionTypeWhereUniqueInput.schema';

export const dictDistributionTypeFindUniqueOrThrowSchema: z.ZodType<Prisma.dictDistributionTypeFindUniqueOrThrowArgs> = z.object({ select: dictDistributionTypeSelectObjectSchema.optional(), include: dictDistributionTypeIncludeObjectSchema.optional(), where: dictDistributionTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictDistributionTypeFindUniqueOrThrowArgs>;

export const dictDistributionTypeFindUniqueOrThrowZodSchema = z.object({ select: dictDistributionTypeSelectObjectSchema.optional(), include: dictDistributionTypeIncludeObjectSchema.optional(), where: dictDistributionTypeWhereUniqueInputObjectSchema }).strict();