import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvWithoutInvExcludeReasonSelectObjectSchema as dictAdvWithoutInvExcludeReasonSelectObjectSchema } from './objects/dictAdvWithoutInvExcludeReasonSelect.schema';
import { dictAdvWithoutInvExcludeReasonWhereUniqueInputObjectSchema as dictAdvWithoutInvExcludeReasonWhereUniqueInputObjectSchema } from './objects/dictAdvWithoutInvExcludeReasonWhereUniqueInput.schema';

export const dictAdvWithoutInvExcludeReasonDeleteOneSchema: z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonDeleteArgs> = z.object({ select: dictAdvWithoutInvExcludeReasonSelectObjectSchema.optional(),  where: dictAdvWithoutInvExcludeReasonWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonDeleteArgs>;

export const dictAdvWithoutInvExcludeReasonDeleteOneZodSchema = z.object({ select: dictAdvWithoutInvExcludeReasonSelectObjectSchema.optional(),  where: dictAdvWithoutInvExcludeReasonWhereUniqueInputObjectSchema }).strict();