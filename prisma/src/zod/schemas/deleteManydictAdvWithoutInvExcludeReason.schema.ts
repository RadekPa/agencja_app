import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvWithoutInvExcludeReasonWhereInputObjectSchema as dictAdvWithoutInvExcludeReasonWhereInputObjectSchema } from './objects/dictAdvWithoutInvExcludeReasonWhereInput.schema';

export const dictAdvWithoutInvExcludeReasonDeleteManySchema: z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonDeleteManyArgs> = z.object({ where: dictAdvWithoutInvExcludeReasonWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonDeleteManyArgs>;

export const dictAdvWithoutInvExcludeReasonDeleteManyZodSchema = z.object({ where: dictAdvWithoutInvExcludeReasonWhereInputObjectSchema.optional() }).strict();