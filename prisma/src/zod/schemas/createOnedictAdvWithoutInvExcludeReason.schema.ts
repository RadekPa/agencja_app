import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvWithoutInvExcludeReasonSelectObjectSchema as dictAdvWithoutInvExcludeReasonSelectObjectSchema } from './objects/dictAdvWithoutInvExcludeReasonSelect.schema';
import { dictAdvWithoutInvExcludeReasonCreateInputObjectSchema as dictAdvWithoutInvExcludeReasonCreateInputObjectSchema } from './objects/dictAdvWithoutInvExcludeReasonCreateInput.schema';
import { dictAdvWithoutInvExcludeReasonUncheckedCreateInputObjectSchema as dictAdvWithoutInvExcludeReasonUncheckedCreateInputObjectSchema } from './objects/dictAdvWithoutInvExcludeReasonUncheckedCreateInput.schema';

export const dictAdvWithoutInvExcludeReasonCreateOneSchema: z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonCreateArgs> = z.object({ select: dictAdvWithoutInvExcludeReasonSelectObjectSchema.optional(),  data: z.union([dictAdvWithoutInvExcludeReasonCreateInputObjectSchema, dictAdvWithoutInvExcludeReasonUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonCreateArgs>;

export const dictAdvWithoutInvExcludeReasonCreateOneZodSchema = z.object({ select: dictAdvWithoutInvExcludeReasonSelectObjectSchema.optional(),  data: z.union([dictAdvWithoutInvExcludeReasonCreateInputObjectSchema, dictAdvWithoutInvExcludeReasonUncheckedCreateInputObjectSchema]) }).strict();