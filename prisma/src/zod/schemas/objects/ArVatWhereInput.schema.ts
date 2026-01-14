import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema'

const arvatwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ArVatWhereInputObjectSchema), z.lazy(() => ArVatWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ArVatWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ArVatWhereInputObjectSchema), z.lazy(() => ArVatWhereInputObjectSchema).array()]).optional(),
  VatCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(2)]).optional(),
  Description: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  VatRate: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  DescriptionPL: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional()
}).strict();
export const ArVatWhereInputObjectSchema: z.ZodType<Prisma.ArVatWhereInput> = arvatwhereinputSchema as unknown as z.ZodType<Prisma.ArVatWhereInput>;
export const ArVatWhereInputObjectZodSchema = arvatwhereinputSchema;
