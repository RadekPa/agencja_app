import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const tblpdoxinvmatwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblPdoxInvMatWhereInputObjectSchema), z.lazy(() => tblPdoxInvMatWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblPdoxInvMatWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblPdoxInvMatWhereInputObjectSchema), z.lazy(() => tblPdoxInvMatWhereInputObjectSchema).array()]).optional(),
  Invoice_Nr: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  Title: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  ISBN: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(16)]).optional().nullable()
}).strict();
export const tblPdoxInvMatWhereInputObjectSchema: z.ZodType<Prisma.tblPdoxInvMatWhereInput> = tblpdoxinvmatwhereinputSchema as unknown as z.ZodType<Prisma.tblPdoxInvMatWhereInput>;
export const tblPdoxInvMatWhereInputObjectZodSchema = tblpdoxinvmatwhereinputSchema;
