import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { TblAgrRightsListRelationFilterObjectSchema as TblAgrRightsListRelationFilterObjectSchema } from './TblAgrRightsListRelationFilter.schema'

const dictdistributiontypewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictDistributionTypeWhereInputObjectSchema), z.lazy(() => dictDistributionTypeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictDistributionTypeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictDistributionTypeWhereInputObjectSchema), z.lazy(() => dictDistributionTypeWhereInputObjectSchema).array()]).optional(),
  DistID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  DistDesc: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(30)]).optional(),
  tblAgrRights: z.lazy(() => TblAgrRightsListRelationFilterObjectSchema).optional()
}).strict();
export const dictDistributionTypeWhereInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeWhereInput> = dictdistributiontypewhereinputSchema as unknown as z.ZodType<Prisma.dictDistributionTypeWhereInput>;
export const dictDistributionTypeWhereInputObjectZodSchema = dictdistributiontypewhereinputSchema;
