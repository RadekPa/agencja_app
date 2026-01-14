import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvWithoutInvExcludeReasonSelectObjectSchema as dictAdvWithoutInvExcludeReasonSelectObjectSchema } from './objects/dictAdvWithoutInvExcludeReasonSelect.schema';
import { dictAdvWithoutInvExcludeReasonWhereUniqueInputObjectSchema as dictAdvWithoutInvExcludeReasonWhereUniqueInputObjectSchema } from './objects/dictAdvWithoutInvExcludeReasonWhereUniqueInput.schema';

export const dictAdvWithoutInvExcludeReasonFindUniqueSchema: z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonFindUniqueArgs> = z.object({ select: dictAdvWithoutInvExcludeReasonSelectObjectSchema.optional(),  where: dictAdvWithoutInvExcludeReasonWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonFindUniqueArgs>;

export const dictAdvWithoutInvExcludeReasonFindUniqueZodSchema = z.object({ select: dictAdvWithoutInvExcludeReasonSelectObjectSchema.optional(),  where: dictAdvWithoutInvExcludeReasonWhereUniqueInputObjectSchema }).strict();