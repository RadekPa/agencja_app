import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const tblmailingtemplateswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblMailingTemplatesWhereInputObjectSchema), z.lazy(() => tblMailingTemplatesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblMailingTemplatesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblMailingTemplatesWhereInputObjectSchema), z.lazy(() => tblMailingTemplatesWhereInputObjectSchema).array()]).optional(),
  TempID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  TempName: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  TempPath: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  TempSubject: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional()
}).strict();
export const tblMailingTemplatesWhereInputObjectSchema: z.ZodType<Prisma.tblMailingTemplatesWhereInput> = tblmailingtemplateswhereinputSchema as unknown as z.ZodType<Prisma.tblMailingTemplatesWhereInput>;
export const tblMailingTemplatesWhereInputObjectZodSchema = tblmailingtemplateswhereinputSchema;
