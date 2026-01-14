import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { TblAgreementsScalarRelationFilterObjectSchema as TblAgreementsScalarRelationFilterObjectSchema } from './TblAgreementsScalarRelationFilter.schema';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema'

const tblroyaltywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblRoyaltyWhereInputObjectSchema), z.lazy(() => tblRoyaltyWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblRoyaltyWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblRoyaltyWhereInputObjectSchema), z.lazy(() => tblRoyaltyWhereInputObjectSchema).array()]).optional(),
  RoyID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AgrID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AgrRightID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  RoyNr: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  EnterDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  RoyDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  Copies: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Price: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  RoyRate: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  XRate: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  ThisRoy: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  AdvLeft: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  RoyDue: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  Pay: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  AdvID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  tblAgreements: z.union([z.lazy(() => TblAgreementsScalarRelationFilterObjectSchema), z.lazy(() => tblAgreementsWhereInputObjectSchema)]).optional()
}).strict();
export const tblRoyaltyWhereInputObjectSchema: z.ZodType<Prisma.tblRoyaltyWhereInput> = tblroyaltywhereinputSchema as unknown as z.ZodType<Prisma.tblRoyaltyWhereInput>;
export const tblRoyaltyWhereInputObjectZodSchema = tblroyaltywhereinputSchema;
