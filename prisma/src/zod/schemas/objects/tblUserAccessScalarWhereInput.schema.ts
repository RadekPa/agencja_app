import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const tbluseraccessscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblUserAccessScalarWhereInputObjectSchema), z.lazy(() => tblUserAccessScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblUserAccessScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblUserAccessScalarWhereInputObjectSchema), z.lazy(() => tblUserAccessScalarWhereInputObjectSchema).array()]).optional(),
  Login: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  PlaceID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const tblUserAccessScalarWhereInputObjectSchema: z.ZodType<Prisma.tblUserAccessScalarWhereInput> = tbluseraccessscalarwhereinputSchema as unknown as z.ZodType<Prisma.tblUserAccessScalarWhereInput>;
export const tblUserAccessScalarWhereInputObjectZodSchema = tbluseraccessscalarwhereinputSchema;
