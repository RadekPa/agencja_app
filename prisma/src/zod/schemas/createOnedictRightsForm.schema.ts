import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRightsFormSelectObjectSchema as dictRightsFormSelectObjectSchema } from './objects/dictRightsFormSelect.schema';
import { dictRightsFormIncludeObjectSchema as dictRightsFormIncludeObjectSchema } from './objects/dictRightsFormInclude.schema';
import { dictRightsFormCreateInputObjectSchema as dictRightsFormCreateInputObjectSchema } from './objects/dictRightsFormCreateInput.schema';
import { dictRightsFormUncheckedCreateInputObjectSchema as dictRightsFormUncheckedCreateInputObjectSchema } from './objects/dictRightsFormUncheckedCreateInput.schema';

export const dictRightsFormCreateOneSchema: z.ZodType<Prisma.dictRightsFormCreateArgs> = z.object({ select: dictRightsFormSelectObjectSchema.optional(), include: dictRightsFormIncludeObjectSchema.optional(), data: z.union([dictRightsFormCreateInputObjectSchema, dictRightsFormUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictRightsFormCreateArgs>;

export const dictRightsFormCreateOneZodSchema = z.object({ select: dictRightsFormSelectObjectSchema.optional(), include: dictRightsFormIncludeObjectSchema.optional(), data: z.union([dictRightsFormCreateInputObjectSchema, dictRightsFormUncheckedCreateInputObjectSchema]) }).strict();