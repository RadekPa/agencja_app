import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { TblAgreementsScalarRelationFilterObjectSchema as TblAgreementsScalarRelationFilterObjectSchema } from './TblAgreementsScalarRelationFilter.schema';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema'

const tbladvancewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblAdvanceWhereInputObjectSchema), z.lazy(() => tblAdvanceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblAdvanceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblAdvanceWhereInputObjectSchema), z.lazy(() => tblAdvanceWhereInputObjectSchema).array()]).optional(),
  AdvID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  Inst: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AgrID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AdvTermId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  AdvTypeId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Amount: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  AdvTermDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  RoyID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  tblAgreements: z.union([z.lazy(() => TblAgreementsScalarRelationFilterObjectSchema), z.lazy(() => tblAgreementsWhereInputObjectSchema)]).optional()
}).strict();
export const tblAdvanceWhereInputObjectSchema: z.ZodType<Prisma.tblAdvanceWhereInput> = tbladvancewhereinputSchema as unknown as z.ZodType<Prisma.tblAdvanceWhereInput>;
export const tblAdvanceWhereInputObjectZodSchema = tbladvancewhereinputSchema;
