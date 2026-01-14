import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const tbltitsubclassscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblTitSubClassScalarWhereInputObjectSchema), z.lazy(() => tblTitSubClassScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblTitSubClassScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblTitSubClassScalarWhereInputObjectSchema), z.lazy(() => tblTitSubClassScalarWhereInputObjectSchema).array()]).optional(),
  SubClassCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  TitleID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const tblTitSubClassScalarWhereInputObjectSchema: z.ZodType<Prisma.tblTitSubClassScalarWhereInput> = tbltitsubclassscalarwhereinputSchema as unknown as z.ZodType<Prisma.tblTitSubClassScalarWhereInput>;
export const tblTitSubClassScalarWhereInputObjectZodSchema = tbltitsubclassscalarwhereinputSchema;
