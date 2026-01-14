import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const ardefaultaccountwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ArDefaultAccountWhereInputObjectSchema), z.lazy(() => ArDefaultAccountWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ArDefaultAccountWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ArDefaultAccountWhereInputObjectSchema), z.lazy(() => ArDefaultAccountWhereInputObjectSchema).array()]).optional(),
  TransactionType: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  DefaultDebitAccount: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  DefaultCreditAccount: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const ArDefaultAccountWhereInputObjectSchema: z.ZodType<Prisma.ArDefaultAccountWhereInput> = ardefaultaccountwhereinputSchema as unknown as z.ZodType<Prisma.ArDefaultAccountWhereInput>;
export const ArDefaultAccountWhereInputObjectZodSchema = ardefaultaccountwhereinputSchema;
