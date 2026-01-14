import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const tbladvancescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblAdvanceScalarWhereInputObjectSchema), z.lazy(() => tblAdvanceScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblAdvanceScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblAdvanceScalarWhereInputObjectSchema), z.lazy(() => tblAdvanceScalarWhereInputObjectSchema).array()]).optional(),
  AdvID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  Inst: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AgrID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AdvTermId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  AdvTypeId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Amount: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  AdvTermDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  RoyID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const tblAdvanceScalarWhereInputObjectSchema: z.ZodType<Prisma.tblAdvanceScalarWhereInput> = tbladvancescalarwhereinputSchema as unknown as z.ZodType<Prisma.tblAdvanceScalarWhereInput>;
export const tblAdvanceScalarWhereInputObjectZodSchema = tbladvancescalarwhereinputSchema;
