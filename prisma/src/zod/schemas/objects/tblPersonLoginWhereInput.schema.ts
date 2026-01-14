import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const tblpersonloginwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblPersonLoginWhereInputObjectSchema), z.lazy(() => tblPersonLoginWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblPersonLoginWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblPersonLoginWhereInputObjectSchema), z.lazy(() => tblPersonLoginWhereInputObjectSchema).array()]).optional(),
  PersonID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  Login: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(30)]).optional(),
  DateBegin: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  DateEnd: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const tblPersonLoginWhereInputObjectSchema: z.ZodType<Prisma.tblPersonLoginWhereInput> = tblpersonloginwhereinputSchema as unknown as z.ZodType<Prisma.tblPersonLoginWhereInput>;
export const tblPersonLoginWhereInputObjectZodSchema = tblpersonloginwhereinputSchema;
