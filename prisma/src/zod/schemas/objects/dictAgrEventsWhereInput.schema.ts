import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TblAgrEventsListRelationFilterObjectSchema as TblAgrEventsListRelationFilterObjectSchema } from './TblAgrEventsListRelationFilter.schema'

const dictagreventswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictAgrEventsWhereInputObjectSchema), z.lazy(() => dictAgrEventsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictAgrEventsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictAgrEventsWhereInputObjectSchema), z.lazy(() => dictAgrEventsWhereInputObjectSchema).array()]).optional(),
  AgrEventCode: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AgrEventDesc: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  Status: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  tblAgrEvents: z.lazy(() => TblAgrEventsListRelationFilterObjectSchema).optional()
}).strict();
export const dictAgrEventsWhereInputObjectSchema: z.ZodType<Prisma.dictAgrEventsWhereInput> = dictagreventswhereinputSchema as unknown as z.ZodType<Prisma.dictAgrEventsWhereInput>;
export const dictAgrEventsWhereInputObjectZodSchema = dictagreventswhereinputSchema;
