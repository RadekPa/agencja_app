import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const dictadvwithoutinvexcludereasonwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictAdvWithoutInvExcludeReasonWhereInputObjectSchema), z.lazy(() => dictAdvWithoutInvExcludeReasonWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictAdvWithoutInvExcludeReasonWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictAdvWithoutInvExcludeReasonWhereInputObjectSchema), z.lazy(() => dictAdvWithoutInvExcludeReasonWhereInputObjectSchema).array()]).optional(),
  ExcludeReasonID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  ExcludeReasonCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  ExcludeReasonDesc: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable()
}).strict();
export const dictAdvWithoutInvExcludeReasonWhereInputObjectSchema: z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonWhereInput> = dictadvwithoutinvexcludereasonwhereinputSchema as unknown as z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonWhereInput>;
export const dictAdvWithoutInvExcludeReasonWhereInputObjectZodSchema = dictadvwithoutinvexcludereasonwhereinputSchema;
