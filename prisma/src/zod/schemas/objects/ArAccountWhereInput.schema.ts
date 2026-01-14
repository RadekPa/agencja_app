import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const araccountwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ArAccountWhereInputObjectSchema), z.lazy(() => ArAccountWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ArAccountWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ArAccountWhereInputObjectSchema), z.lazy(() => ArAccountWhereInputObjectSchema).array()]).optional(),
  AccountID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AccountDescription: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(40)]).optional()
}).strict();
export const ArAccountWhereInputObjectSchema: z.ZodType<Prisma.ArAccountWhereInput> = araccountwhereinputSchema as unknown as z.ZodType<Prisma.ArAccountWhereInput>;
export const ArAccountWhereInputObjectZodSchema = araccountwhereinputSchema;
