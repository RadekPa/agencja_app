import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRightsFormSelectObjectSchema as dictRightsFormSelectObjectSchema } from './objects/dictRightsFormSelect.schema';
import { dictRightsFormIncludeObjectSchema as dictRightsFormIncludeObjectSchema } from './objects/dictRightsFormInclude.schema';
import { dictRightsFormWhereUniqueInputObjectSchema as dictRightsFormWhereUniqueInputObjectSchema } from './objects/dictRightsFormWhereUniqueInput.schema';

export const dictRightsFormDeleteOneSchema: z.ZodType<Prisma.dictRightsFormDeleteArgs> = z.object({ select: dictRightsFormSelectObjectSchema.optional(), include: dictRightsFormIncludeObjectSchema.optional(), where: dictRightsFormWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictRightsFormDeleteArgs>;

export const dictRightsFormDeleteOneZodSchema = z.object({ select: dictRightsFormSelectObjectSchema.optional(), include: dictRightsFormIncludeObjectSchema.optional(), where: dictRightsFormWhereUniqueInputObjectSchema }).strict();