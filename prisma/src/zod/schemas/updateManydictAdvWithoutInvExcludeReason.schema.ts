import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvWithoutInvExcludeReasonUpdateManyMutationInputObjectSchema as dictAdvWithoutInvExcludeReasonUpdateManyMutationInputObjectSchema } from './objects/dictAdvWithoutInvExcludeReasonUpdateManyMutationInput.schema';
import { dictAdvWithoutInvExcludeReasonWhereInputObjectSchema as dictAdvWithoutInvExcludeReasonWhereInputObjectSchema } from './objects/dictAdvWithoutInvExcludeReasonWhereInput.schema';

export const dictAdvWithoutInvExcludeReasonUpdateManySchema: z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonUpdateManyArgs> = z.object({ data: dictAdvWithoutInvExcludeReasonUpdateManyMutationInputObjectSchema, where: dictAdvWithoutInvExcludeReasonWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonUpdateManyArgs>;

export const dictAdvWithoutInvExcludeReasonUpdateManyZodSchema = z.object({ data: dictAdvWithoutInvExcludeReasonUpdateManyMutationInputObjectSchema, where: dictAdvWithoutInvExcludeReasonWhereInputObjectSchema.optional() }).strict();