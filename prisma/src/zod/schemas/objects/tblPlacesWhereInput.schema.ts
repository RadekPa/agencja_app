import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { TblUserAccessListRelationFilterObjectSchema as TblUserAccessListRelationFilterObjectSchema } from './TblUserAccessListRelationFilter.schema'

const tblplaceswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblPlacesWhereInputObjectSchema), z.lazy(() => tblPlacesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblPlacesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblPlacesWhereInputObjectSchema), z.lazy(() => tblPlacesWhereInputObjectSchema).array()]).optional(),
  PlaceID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  PlaceDesc: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  tblUserAccess: z.lazy(() => TblUserAccessListRelationFilterObjectSchema).optional()
}).strict();
export const tblPlacesWhereInputObjectSchema: z.ZodType<Prisma.tblPlacesWhereInput> = tblplaceswhereinputSchema as unknown as z.ZodType<Prisma.tblPlacesWhereInput>;
export const tblPlacesWhereInputObjectZodSchema = tblplaceswhereinputSchema;
