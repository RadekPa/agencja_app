import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvWithoutInvExcludeReasonSelectObjectSchema as dictAdvWithoutInvExcludeReasonSelectObjectSchema } from './objects/dictAdvWithoutInvExcludeReasonSelect.schema';
import { dictAdvWithoutInvExcludeReasonUpdateInputObjectSchema as dictAdvWithoutInvExcludeReasonUpdateInputObjectSchema } from './objects/dictAdvWithoutInvExcludeReasonUpdateInput.schema';
import { dictAdvWithoutInvExcludeReasonUncheckedUpdateInputObjectSchema as dictAdvWithoutInvExcludeReasonUncheckedUpdateInputObjectSchema } from './objects/dictAdvWithoutInvExcludeReasonUncheckedUpdateInput.schema';
import { dictAdvWithoutInvExcludeReasonWhereUniqueInputObjectSchema as dictAdvWithoutInvExcludeReasonWhereUniqueInputObjectSchema } from './objects/dictAdvWithoutInvExcludeReasonWhereUniqueInput.schema';

export const dictAdvWithoutInvExcludeReasonUpdateOneSchema: z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonUpdateArgs> = z.object({ select: dictAdvWithoutInvExcludeReasonSelectObjectSchema.optional(),  data: z.union([dictAdvWithoutInvExcludeReasonUpdateInputObjectSchema, dictAdvWithoutInvExcludeReasonUncheckedUpdateInputObjectSchema]), where: dictAdvWithoutInvExcludeReasonWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonUpdateArgs>;

export const dictAdvWithoutInvExcludeReasonUpdateOneZodSchema = z.object({ select: dictAdvWithoutInvExcludeReasonSelectObjectSchema.optional(),  data: z.union([dictAdvWithoutInvExcludeReasonUpdateInputObjectSchema, dictAdvWithoutInvExcludeReasonUncheckedUpdateInputObjectSchema]), where: dictAdvWithoutInvExcludeReasonWhereUniqueInputObjectSchema }).strict();