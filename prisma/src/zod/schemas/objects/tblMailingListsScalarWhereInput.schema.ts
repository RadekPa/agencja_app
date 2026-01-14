import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const tblmailinglistsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblMailingListsScalarWhereInputObjectSchema), z.lazy(() => tblMailingListsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblMailingListsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblMailingListsScalarWhereInputObjectSchema), z.lazy(() => tblMailingListsScalarWhereInputObjectSchema).array()]).optional(),
  ClassCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  SubClassCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  CustID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const tblMailingListsScalarWhereInputObjectSchema: z.ZodType<Prisma.tblMailingListsScalarWhereInput> = tblmailinglistsscalarwhereinputSchema as unknown as z.ZodType<Prisma.tblMailingListsScalarWhereInput>;
export const tblMailingListsScalarWhereInputObjectZodSchema = tblmailinglistsscalarwhereinputSchema;
